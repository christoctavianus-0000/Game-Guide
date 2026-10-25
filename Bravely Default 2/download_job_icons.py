#!/usr/bin/env python3
"""
download_job_icons.py - Downloads the official job icons for Bravely Default II.
Uses ssl._create_unverified_context() to handle CDN certificates cleanly.
"""

import json
import os
import re
import ssl
import urllib.request

JOB_ICON_FILES = {
    'freelancer': 'Freelancer Icon from BDII.png',
    'black-mage': 'Black Mage Icon from BDII.png',
    'white-mage': 'White Mage Icon from BDII.png',
    'vanguard': 'Vanguard Icon from BDII.png',
    'monk': 'Monk Icon from BDII.png',
    'bravebearer': 'BravebearerIcon.png',
    'bard': 'Bard Icon from BDII.png',
    'beastmaster': 'Beastmaster Icon from BDII.png',
    'gambler': 'Gambler Icon from BDII.png',
    'thief': 'Thief Icon from BDII.png',
    'berserker': 'Berserker Icon from BDII.png',
    'red-mage': 'Red Mage Icon from BDII.png',
    'ranger': 'Ranger Icon from BDII.png',
    'shieldmaster': 'Shieldbearer Icon from BDII.png',
    'pictomancer': 'Pictomancer Icon from BDII.png',
    'dragoon': 'Dragoon Icon from BDII.png',
    'swordmaster': 'Swordmaster Icon from BDII.png',
    'spiritmaster': 'Spiritmaster Icon from BDII.png',
    'oracle': 'Oracle Icon from BDII.png',
    'salve-maker': 'Chemist Icon from BDII.png',
    'bastion': 'Bastion Icon from BDII.png',
    'phantom': 'Phantom Icon from BDII.png',
    'arcanist': 'Arcanist Icon from BDII.png',
    'hellblade': 'Hellblade Icon from BDII.png',
}

DEST_DIR = os.path.join(os.path.dirname(__file__), 'assets', 'jobs')
os.makedirs(DEST_DIR, exist_ok=True)
SSL_CTX = ssl._create_unverified_context()

def fetch_image_url(file_title):
    api_url = f"https://bravelydefault.fandom.com/api.php?action=query&titles=File:{urllib.parse.quote(file_title)}&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=SSL_CTX, timeout=10) as r:
            data = json.loads(r.read())
            pages = data.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata and pdata['imageinfo']:
                    return pdata['imageinfo'][0]['url']
    except Exception as e:
        print(f"Error fetching url for {file_title}: {e}")
    return None

def download_file(url, dest_path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=SSL_CTX, timeout=15) as r, open(dest_path, 'wb') as f:
            f.write(r.read())
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def main():
    success = 0
    for slug, filename in JOB_ICON_FILES.items():
        dest = os.path.join(DEST_DIR, f"{slug}.png")
        if os.path.exists(dest) and os.path.getsize(dest) > 500:
            print(f"Already exists: {slug}.png")
            success += 1
            continue

        url = fetch_image_url(filename)
        if url:
            if download_file(url, dest):
                print(f"Downloaded: {slug}.png ({os.path.getsize(dest)} bytes)")
                success += 1
            else:
                print(f"Failed download: {slug}.png")
        else:
            print(f"Could not resolve image URL for {filename}")

    print(f"Job icons download complete: {success}/{len(JOB_ICON_FILES)} downloaded.")

if __name__ == '__main__':
    main()
