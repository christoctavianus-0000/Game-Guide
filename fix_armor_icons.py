import re

# Read the equipmentData.js file
with open('equipmentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by items and replace empty icons based on type
# Pattern: "type": "XXX", <whitespace> "icon": ""
def replace_empty_icon(match):
    item_type = match.group(1)
    if item_type == "Headgear":
        return f'    "type": "{item_type}",\n    "icon": "assets/icons/icon_headgear.svg"'
    elif item_type == "Body Armor":
        return f'    "type": "{item_type}",\n    "icon": "assets/icons/icon_body_armor.svg"'
    elif item_type == "Shield":
        return f'    "type": "{item_type}",\n    "icon": "assets/icons/icon_shield.svg"'
    elif item_type == "Accessories":
        return f'    "type": "{item_type}",\n    "icon": "assets/icons/icon_accessories.svg"'
    return match.group(0)

# Match "type": "XXX", optionally followed by spaces and "icon": ""
content = re.sub(
    r'"type":\s*("(?:Headgear|Body Armor|Shield|Accessories)")\s*,\s*"icon":\s*""',
    replace_empty_icon,
    content
)

# Write back
with open('equipmentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
