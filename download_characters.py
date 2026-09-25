"""Download sprites and portraits for all characters from Octopath Traveler Wiki."""

import urllib.request
import json
import ssl
import os
import time
from urllib.parse import quote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

characters = [
    "Stia", "Phenn", "Laurana", "Heidne", "Celsus", "Macy", "Alexia", "Viator",
    "Ludo", "Pius", "Saoirse", "Carinda", "Xerc", "Reime", "Delitia", "Esperre",
    "Goodwin", "Olberic", "Tressa", "Therion", "Alfyn", "H'aanit", "Ophilia",
    "Cyrus", "Primrose", "Bargello", "Alaune", "Richard", "Solon", "Eltrix",
    "Rondo", "El", "Tatloch", "Sazantos", "Isla"
]

dest_dir = "assets/characters"
os.makedirs(dest_dir, exist_ok=True)

def search_wiki_images(name):
    encoded = quote(f"File:{name}.png|File:{name}.jpg|File:{name} Sprite.png|File:{name} Artwork.png|File:CotC {name} Artwork.png", safe="|:")
    url = f"https://octopathtraveler.fandom.com/api.php?action=query&titles={encoded}&prop=imageinfo&iiprop=url%7Csize&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        data = json.loads(resp.read().decode())
    results = []
    for pid, page in data.get("query", {}).get("pages", {}).items():
        if "imageinfo" in page:
            info = page["imageinfo"][0]
            title = page["title"].replace("File:", "")
            results.append({"title": title, "url": info["url"], "w": info.get("width", 0), "h": info.get("height", 0)})
    return results

def download_file(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
        data = resp.read()
    with open(dest, "wb") as f:
        f.write(data)
    return len(data)

downloaded = 0
for name in characters:
    try:
        images = search_wiki_images(name)
        safe_name = name.replace("'", "").replace(" ", "_").lower()
        for img in images:
            title = img["title"]
            if "sprite" in title.lower():
                fname = f"{safe_name}_sprite.png"
            elif "artwork" in title.lower() or "cotc" in title.lower():
                fname = f"{safe_name}_artwork.png"
            else:
                fname = f"{safe_name}_portrait.png"
            
            dest = os.path.join(dest_dir, fname)
            if os.path.exists(dest):
                continue
            size = download_file(img["url"], dest)
            print(f"  OK: {name:12} -> {fname:25} ({img['w']}x{img['h']}, {size}B)")
            downloaded += 1
        time.sleep(0.1)
    except Exception as e:
        print(f"  ERR: {name:12} -> {e}")

print(f"\nDone! Downloaded {downloaded} new files to {dest_dir}/")
