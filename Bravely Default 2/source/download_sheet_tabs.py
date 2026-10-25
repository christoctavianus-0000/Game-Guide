import urllib.request
import os
import csv

tabs = {
    "Prologue Jobs": "891038042",
    "Ch. 1 Jobs": "784105913",
    "Ch. 2 Jobs": "43116450",
    "Ch. 3 Jobs": "1064178030",
    "Ch. 4+ Jobs": "646614612"
}

out_dir = os.path.join(os.path.dirname(__file__), "sheet_tabs")
os.makedirs(out_dir, exist_ok=True)

base_url = "https://docs.google.com/spreadsheets/d/1r5pxkOhcnpO7gdfzLAR8XN4RpPfJ6YnQwEUOATO33zw/export?format=csv&gid="

for name, gid in tabs.items():
    filename = name.lower().replace(" ", "_").replace(".", "").replace("+", "plus") + ".csv"
    filepath = os.path.join(out_dir, filename)
    url = base_url + gid
    print(f"Downloading {name} ({gid}) to {filepath}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp, open(filepath, "wb") as f:
            f.write(resp.read())
        print(f"  Saved {os.path.getsize(filepath)} bytes.")
    except Exception as e:
        print(f"  Error: {e}")
