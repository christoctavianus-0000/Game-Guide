import sys

try:
    with open('equipmentData.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f'Original file size: {len(content)} bytes', file=sys.stderr)
    
    replacements = {
        'Headgear': 'assets/icons/icon_headgear.svg',
        'Body Armor': 'assets/icons/icon_body_armor.svg',
        'Shield': 'assets/icons/icon_shield.svg',
        'Accessories': 'assets/icons/icon_accessories.svg'
    }
    
    total_count = 0
    for type_name, icon_path in replacements.items():
        old_pattern = f'"type": "{type_name}",\n    "icon": ""'
        new_pattern = f'"type": "{type_name}",\n    "icon": "{icon_path}"'
        count = content.count(old_pattern)
        content = content.replace(old_pattern, new_pattern)
        print(f'{type_name}: replaced {count} items', file=sys.stderr)
        total_count += count
    
    with open('equipmentData.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Total: {total_count} replacements', file=sys.stderr)
    print(f'New file size: {len(content)} bytes', file=sys.stderr)
    print('SUCCESS')
    
except Exception as e:
    print(f'ERROR: {e}', file=sys.stderr)
    sys.exit(1)
