'use strict';

/**
 * Minimal DOM stub for exercising the codex apps in Node.
 *
 * The apps are plain IIFEs that read their markup from the page and their data
 * from a global const, so a test only needs: elements resolved by id, element
 * class/style attributes, addEventListener + dispatch, and a localStorage stub.
 * This is intentionally not a full DOM - it supports exactly the surface the
 * two codex apps use.
 */

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');

function makeElement(tag, attrs) {
  const attributes = Object.assign({}, attrs);
  const classes = new Set(String(attributes.class || '').split(/\s+/).filter(Boolean));

  const element = {
    tagName: String(tag || 'div').toUpperCase(),
    textContent: '',
    value: attributes.value || '',
    style: {},
    children: [],
    disabled: false,
    _listeners: {},

    addEventListener(type, handler) {
      (this._listeners[type] = this._listeners[type] || []).push(handler);
    },
    removeEventListener() {},
    appendChild(child) {
      this.children.push(child);
      return child;
    },
    setAttribute(key, value) {
      attributes[key] = String(value);
    },
    getAttribute(key) {
      return Object.prototype.hasOwnProperty.call(attributes, key) ? attributes[key] : null;
    },
    hasAttribute(key) {
      return Object.prototype.hasOwnProperty.call(attributes, key);
    },
    querySelector(selector) {
      // app.js asks each rendered card for its favourite button
      if (selector === '.card-fav-btn') {
        if (!this._favBtn) {
          this._favBtn = makeElement('button', { class: 'card-fav-btn', 'data-fav-id': attributes['data-id'] || '' });
        }
        return this._favBtn;
      }
      return null;
    },
    querySelectorAll(selector) {
      if (!selector) return this.children.slice();
      if (selector === 'article') return this.children.filter(child => child.tagName === 'ARTICLE');
      if (selector === 'a') return this.children.flatMap(child => child.querySelectorAll ? child.querySelectorAll('a') : []).concat(this.children.filter(child => child.tagName === 'A'));
      if (selector.startsWith('[data-job-switch')) return this.children.filter(child => child.getAttribute && child.getAttribute('data-job-switch'));
      if (selector.startsWith('[data-skill-name')) return this.children.filter(child => child.getAttribute && child.getAttribute('data-skill-name'));
      return [];
    },
    closest() {
      return null;
    },
    dispatch(type, event) {
      const payload = event || { target: element };
      if (!payload.stopPropagation) payload.stopPropagation = () => {};
      if (!payload.preventDefault) payload.preventDefault = () => {};
      (this._listeners[type] || []).forEach(handler => handler(payload));
    }
  };

  element.classList = {
    add: name => classes.add(name),
    remove: name => classes.delete(name),
    contains: name => classes.has(name),
    toggle: (name, force) => {
      const on = force === undefined ? !classes.has(name) : Boolean(force);
      if (on) classes.add(name); else classes.delete(name);
      return on;
    }
  };

  let html = '';
  Object.defineProperty(element, 'innerHTML', {
    get: () => html,
    set: value => {
      html = String(value);
      element.children = [];
      if (!html) return;

      const parseAttributes = attrText => {
        const result = {};
        const pattern = /([\w-]+)="([^"]*)"/g;
        let match;
        while ((match = pattern.exec(attrText))) result[match[1]] = match[2];
        return result;
      };

      const articlePattern = /<article\b([^>]*)>([\s\S]*?)<\/article>/g;
      let childMatch;
      while ((childMatch = articlePattern.exec(html))) {
        const child = makeElement('article', parseAttributes(childMatch[1]));
        child.innerHTML = childMatch[2];
        element.children.push(child);
      }
    }
  });

  return element;
}

/**
 * Load a codex page: build its element registry from the real markup, then run
 * the generated data and the app script inside a fresh vm context.
 *
 * @param {{html: string, scripts: string[], globals?: Record<string, unknown>}} options
 */
function loadCodex(options) {
  const html = fs.readFileSync(path.join(ROOT, options.html), 'utf8');

  const registry = {};
  for (const match of html.matchAll(/id="([^"]+)"/g)) {
    registry[match[1]] = makeElement('div', { id: match[1] });
  }

  // Control values the apps read on init
  const initialValues = { statFilter: 'all', minStatFilter: '0', sortFilter: 'name-asc', spFilter: 'all', targetFilter: 'all' };
  Object.entries(initialValues).forEach(([id, value]) => {
    if (registry[id]) registry[id].value = value;
  });

  const categoryTabs = [...html.matchAll(/<button class="cat-tab([^"]*)" data-category="([^"]+)"/g)]
    .map(m => makeElement('button', { class: `cat-tab${m[1]}`, 'data-category': m[2] }));

  const sortHeaders = [...html.matchAll(/data-sort-key="([^"]+)"/g)]
    .map(m => makeElement('th', { class: 'sortable', 'data-sort-key': m[1] }));

  const store = new Map();

  const documentStub = {
    readyState: 'complete',
    body: makeElement('body'),
    getElementById: id => registry[id] || null,
    createElement: tag => makeElement(tag),
    addEventListener() {},
    querySelectorAll(selector) {
      if (selector === '.cat-tab') return categoryTabs;
      if (selector.indexOf('th.sortable') > -1) return sortHeaders;
      return [];
    },
    querySelector() {
      return null;
    }
  };

  const context = vm.createContext({
    document: documentStub,
    window: {
      addEventListener() {},
      scrollTo() {},
      location: {
        hash: options.hash || '',
        search: options.search || ''
      }
    },
    URLSearchParams,
    localStorage: {
      getItem: key => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, String(value)),
      removeItem: key => store.delete(key)
    },
    console,
    setTimeout,
    clearTimeout,
    ...(options.globals || {})
  });

  options.scripts.forEach(script => {
    vm.runInContext(fs.readFileSync(path.join(ROOT, script), 'utf8'), context, { filename: script });
    const sourceText = fs.readFileSync(path.join(ROOT, script), 'utf8');
    if (sourceText.includes('const characterData') || sourceText.includes('var characterData')) {
      context.characterData = vm.runInContext('characterData', context);
    }
    if (sourceText.includes('const enemyData') || sourceText.includes('var enemyData')) {
      context.enemyData = vm.runInContext('enemyData', context);
    }
    if (sourceText.includes('const skillData') || sourceText.includes('var skillData')) {
      context.skillData = vm.runInContext('skillData', context);
    }
  });

  return {
    registry,
    categoryTabs,
    sortHeaders,
    store,
    context,

    /** @param {string} id */
    el: id => registry[id],

    html: id => (registry[id] ? registry[id].innerHTML : ''),

    text: id => (registry[id] ? registry[id].textContent : ''),

    /** Fire an event on a stub element. */
    fire(target, type, event) {
      const element = typeof target === 'string' ? registry[target] : target;
      element.dispatch(type, event);
    },

    /** Build a fake event target whose closest() resolves the given selector. */
    targetStub(selector, attributes) {
      const stub = makeElement('span', attributes || {});
      stub.closest = candidate => (candidate === selector ? stub : null);
      return stub;
    },

    /** Number of card articles currently rendered in a grid. */
    countCards: id => (registry[id].innerHTML.match(/<article/g) || []).length,

    /** Number of child elements appended to a container (app.js builds cards this way). */
    countChildren: id => (registry[id] ? registry[id].children.length : 0),

    /** The rendered card elements in a grid, in display order. */
    cardElements: id => (registry[id] ? registry[id].children.slice() : []),

    /** Number of table rows currently rendered. */
    countRows: id => (
      (registry[id].innerHTML.match(/<tr\b/g) || []).length
    )
  };
}

module.exports = { loadCodex, makeElement, ROOT };