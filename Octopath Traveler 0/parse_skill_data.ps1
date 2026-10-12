[System.Reflection.Assembly]::LoadWithPartialName('System.IO.Compression.FileSystem') | Out-Null

$xlsxPath = 'Octopath traveler 0 database .xlsx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($xlsxPath)

# 1. Read shared strings table
$sharedReader = New-Object System.IO.StreamReader($zip.GetEntry('xl/sharedStrings.xml').Open())
$sharedXml = [xml]$sharedReader.ReadToEnd()
$sharedReader.Dispose()

$sharedNs = New-Object System.Xml.XmlNamespaceManager($sharedXml.NameTable)
$sharedNs.AddNamespace('a', $sharedXml.DocumentElement.NamespaceURI)

$sharedStrings = New-Object System.Collections.Generic.List[string]
foreach ($si in $sharedXml.SelectNodes('//a:si', $sharedNs)) {
    $text = ''
    $textNodes = $si.SelectNodes('./a:r/a:t', $sharedNs)
    if ($textNodes.Count -gt 0) {
        foreach ($node in $textNodes) { $text += $node.InnerText }
    } else {
        $textNode = $si.SelectSingleNode('./a:t', $sharedNs)
        if ($textNode) { $text = $textNode.InnerText }
    }
    $sharedStrings.Add($text)
}

# 2. Read sheet1 (SkillData)
$sheetReader = New-Object System.IO.StreamReader($zip.GetEntry('xl/worksheets/sheet1.xml').Open())
$sheetXml = [xml]$sheetReader.ReadToEnd()
$sheetReader.Dispose()
$zip.Dispose()

$sheetNs = New-Object System.Xml.XmlNamespaceManager($sheetXml.NameTable)
$sheetNs.AddNamespace('a', $sheetXml.DocumentElement.NamespaceURI)
$rows = $sheetXml.SelectNodes('//a:worksheet/a:sheetData/a:row', $sheetNs)

function GetColumnLetterIndex {
    param([string]$col)
    $num = 0
    foreach ($ch in $col.ToCharArray()) {
        $num = $num * 26 + ([int][char]$ch - [int][char]'A' + 1)
    }
    return $num - 1
}

function GetCellValue {
    param(
        [System.Xml.XmlElement]$cell,
        [System.Collections.Generic.List[string]]$sharedStrings,
        [System.Xml.XmlNamespaceManager]$sheetNs
    )
    $cellType = $cell.GetAttribute('t')
    $cellValue = $cell.SelectSingleNode('./a:v', $sheetNs)
    if ($cellType -eq 's' -and $cellValue) {
        $idx = [int]$cellValue.InnerText
        if ($idx -lt $sharedStrings.Count) { return $sharedStrings[$idx] }
        return ''
    }
    if ($cellValue) { return $cellValue.InnerText }
    return ''
}

# Resolve headers by column index
$headerRow = $rows[0]
$headers = @{}
foreach ($cell in $headerRow.SelectNodes('./a:c', $sheetNs)) {
    $ref = $cell.GetAttribute('r') -replace '[0-9]', ''
    $colIndex = GetColumnLetterIndex -col $ref
    $headers[$colIndex] = GetCellValue -cell $cell -sharedStrings $sharedStrings -sheetNs $sheetNs
}

$weaponLabels = @{
    '1' = 'Sword'; '2' = 'Polearm'; '3' = 'Dagger'; '4' = 'Axe'
    '5' = 'Bow'; '6' = 'Staff'; '7' = 'Tome'; '8' = 'Fan'; '9' = 'Unarmed'
}

$magicLabels = @{
    '1' = 'Fire'; '2' = 'Ice'; '3' = 'Lightning'; '4' = 'Wind'
    '5' = 'Light'; '6' = 'Dark'; '7' = 'Spirit'; '0' = 'Arcane'
}

# Only use explicitly named, verified icon assets. The numbered image files are
# status-effect icons, not weapon or element icons.
$subtypeIcons = @{
    'Sword' = 'assets/icons/icon_sword.png'
    'Polearm' = 'assets/icons/icon_polearm.png'
    'Dagger' = 'assets/icons/icon_dagger.png'
    'Axe' = 'assets/icons/icon_axe.png'
    'Bow' = 'assets/icons/icon_bow.png'
    'Staff' = 'assets/icons/icon_staff.png'
    'Tome' = 'assets/icons/icon_tome.png'
    'Fan' = 'assets/icons/icon_fan.png'
    'Unarmed' = 'assets/icons/icon_unarmed.svg'
    'Fire' = 'assets/icons/icon_fire.png'
    'Ice' = 'assets/icons/icon_ice.png'
    'Lightning' = 'assets/icons/icon_lightning.png'
    'Wind' = 'assets/icons/icon_wind.png'
    'Light' = 'assets/icons/icon_light.png'
    'Dark' = 'assets/icons/icon_dark.png'
    'Spirit' = 'assets/icons/icon_spirit.svg'
    'Arcane' = 'assets/icons/icon_arcane.svg'
}

function CleanDetailText {
    param([string]$text)
    if (-not $text) { return '' }
    $t = $text -replace '<skl_turn_count>\s*turn\(s\)\.?', 'turn(s).'
    $t = $t -replace '<skl_turn_count>', 'turn(s)'
    $t = $t -replace '<skl_boostcol>([^<]*)</skl_boostcol>', '$1'
    $t = $t -replace '<[^>]+>', ''
    $t = $t -replace '\s+', ' '
    return $t.Trim()
}

function GetTargetLabel {
    param([string]$targetNum, [string]$detail)
    $val = $targetNum -replace '\.0$', ''
    switch ($val) {
        '0' { return 'Single Foe' }
        '1' { return 'Single Foe' }
        '2' { return 'All Foes' }
        '3' { return 'Random Foes' }
        '5' { return 'Self' }
        '12' { return 'Single Ally' }
        '14' { return 'Self' }
        '17' { return 'Paired Ally' }
        '20' { return 'All Allies' }
        '21' { return 'All Allies' }
        '28' { return 'All Allies' }
        '29' { return 'Back Row' }
        '30' { return 'Single Ally' }
        '214' { return 'All Allies' }
        '215' { return 'All Allies' }
        '216' { return 'Front Row Ally' }
        '224' { return 'Front/Back Row' }
        '225' { return 'Single Ally' }
        '226' { return 'Front/Back Row' }
        default {
            if ($detail -match 'all foes') { return 'All Foes' }
            if ($detail -match 'a foe|target enemy') { return 'Single Foe' }
            if ($detail -match 'all allies') { return 'All Allies' }
            if ($detail -match 'an ally') { return 'Single Ally' }
            if ($detail -match 'own|self') { return 'Self' }
            return 'Special Target'
        }
    }
}

$skills = @()
$catCounts = @{ Physical = 0; Elemental = 0; Support = 0; Passive = 0 }

for ($ri = 1; $ri -lt $rows.Count; $ri++) {
    $row = $rows[$ri]
    $rowMap = @{}
    foreach ($cell in $row.SelectNodes('./a:c', $sheetNs)) {
        $ref = $cell.GetAttribute('r') -replace '[0-9]', ''
        $colIndex = GetColumnLetterIndex -col $ref
        if ($headers.ContainsKey($colIndex)) {
            $hName = $headers[$colIndex]
            if ($hName) {
                $rowMap[$hName] = GetCellValue -cell $cell -sharedStrings $sharedStrings -sheetNs $sheetNs
            }
        }
    }

    $skillName = ($rowMap['Skill Name'] -as [string])
    if (-not $skillName -or $skillName.Trim().Length -eq 0) {
        continue
    }
    $skillName = $skillName.Trim()

    $id = ($rowMap['ID'] -as [string]) -replace '\.0$', ''
    $detailRaw = ($rowMap['Skill Detail'] -as [string])
    $detail = CleanDetailText -text $detailRaw
    $spRaw = ($rowMap['RequireValue'] -as [string]) -replace '\.0$', ''
    $sp = 0
    if ($spRaw -and [int]::TryParse($spRaw, [ref]$sp)) { } else { $sp = 0 }

    $skillType = ($rowMap['SkillType'] -as [string]).Trim()
    $weaponTypeNum = (($rowMap['WeaponIconType'] -as [string]) -replace '\.0$', '').Trim()
    $magicTypeNum = (($rowMap['MagicIconType'] -as [string]) -replace '\.0$', '').Trim()
    $targetNum = (($rowMap['TargetType'] -as [string]) -replace '\.0$', '').Trim()
    $targetLabel = GetTargetLabel -targetNum $targetNum -detail $detail
    $isWeaponSelect = (($rowMap['IsWeaponSelect'] -as [string]).Trim() -in @('1', 'True', 'true'))
    $isAllWeaponsAttack = $detail -match '\bwith all weapons\b'

    # Determine High-Level Category
    $category = ''
    $subType = ''
    $iconImg = ''

    # Weapon-selection and all-weapon skills have a wrapper row with no weapon
    # icon/type. Keep that authored row as the canonical entry and classify it
    # from its gameplay behavior rather than treating it as support/passive.
    if ($isWeaponSelect -or $isAllWeaponsAttack) {
        $category = 'Physical'
        $subType = if ($isAllWeaponsAttack) { 'All Weapons' } else { 'Weapon Select' }
    } elseif ($skillType -eq 'Phys' -or ($weaponTypeNum -and $weaponTypeNum -ne '0')) {
        $category = 'Physical'
        $subType = if ($weaponLabels.ContainsKey($weaponTypeNum)) { $weaponLabels[$weaponTypeNum] } else { 'Physical' }
        if ($subtypeIcons.ContainsKey($subType)) {
            $iconImg = $subtypeIcons[$subType]
        }
    } elseif ($skillType -eq 'Elem' -or ($magicTypeNum -and $magicTypeNum -ne '0')) {
        $category = 'Elemental'
        $subType = if ($magicLabels.ContainsKey($magicTypeNum)) { $magicLabels[$magicTypeNum] } else { 'Elemental' }
        if ($subtypeIcons.ContainsKey($subType)) {
            $iconImg = $subtypeIcons[$subType]
        }
    } else {
        # Check if Passive vs Support
        $isPassiveTrait = ($sp -eq 0) -and ($detail -match '^(When|At the start|At the end|Grant an effect that allows you to recover with|Status effects are not removed|After the equipped character)|equipped character|automatically')
        if ($isPassiveTrait) {
            $category = 'Passive'
            $subType = 'Passive Trait'
            $targetLabel = 'Passive'
        } elseif ($sp -gt 0 -or $detail -match 'restore|heal|revive|raise|grant|cure|extend|nullify|provoke|shield') {
            $category = 'Support'
            if ($detail -match 'restore|heal|revive|cure') { $subType = 'Recovery' }
            elseif ($detail -match 'raise|grant|boost|shield|nullify') { $subType = 'Buff' }
            elseif ($detail -match 'lower|reduce|inflict|provoke') { $subType = 'Debuff' }
            else { $subType = 'Utility' }
        } else {
            $category = 'Passive'
            $subType = 'Passive Trait'
            $targetLabel = 'Passive'
        }
    }

    $catCounts[$category]++

    # Collect Ailments
    $ailments = @()
    for ($a = 1; $a -le 4; $a++) {
        $aName = ($rowMap["Ailment $a"] -as [string])
        if ($aName -and $aName.Trim().Length -gt 0) {
            $aVal = ($rowMap["Ailment Value $a"] -as [string]) -replace '\.0$', ''
            $aEff = ($rowMap["Ailment Efficacy $a"] -as [string]) -replace '\.0$', ''
            $ailments += [PSCustomObject]@{
                name = $aName.Trim()
                value = $aVal
                efficacy = $aEff
            }
        }
    }

    # Collect Boost Ratios
    $ratios = @()
    for ($r = 1; $r -le 4; $r++) {
        $rat = ($rowMap["SkillRatios.$r"] -as [string]) -replace '\.0$', ''
        if ($rat) { $ratios += [double]$rat } else { $ratios += 0 }
    }

    # Collect Hit Counts
    $hitCounts = @()
    for ($h = 1; $h -le 4; $h++) {
        $hc = ($rowMap["Min_HitCount $h"] -as [string]) -replace '\.0$', ''
        if ($hc) { $hitCounts += [int]$hc } else { $hitCounts += 0 }
    }

    $turns = ($rowMap['Turns'] -as [string])

    $skills += [PSCustomObject]@{
        id = $id
        name = $skillName
        detail = $detail
        category = $category
        subType = $subType
        icon = $iconImg
        sp = $sp
        target = $targetLabel
        turns = $turns
        ratios = $ratios
        hits = $hitCounts
        ailments = $ailments
    }
}

# The workbook deliberately contains implementation rows for weapon choices,
# availability states, and boost/effect variants. The public skill list and
# wiki present each player-facing skill once, so retain the first authored row
# for every display name. Workbook order places that wrapper/canonical row
# before its generated variants.
$canonicalSkills = [ordered]@{}
foreach ($skill in $skills) {
    if (-not $canonicalSkills.Contains($skill.name)) {
        # Weapon-selection wrappers provide the readable player-facing
        # description, while their generated weapon rows hold the actual
        # target and boost values. Merge those complementary fields here.
        if ($skill.subType -in @('Weapon Select', 'All Weapons')) {
            $combatVariant = $skills | Where-Object {
                $_.name -eq $skill.name -and
                $_.category -eq 'Physical' -and
                (($_.ratios[1] -ne 100) -or ($_.ratios[2] -ne 100) -or ($_.ratios[3] -ne 100) -or ($_.hits | Where-Object { $_ -gt 0 }))
            } | Select-Object -First 1

            if ($combatVariant) {
                $skill.target = $combatVariant.target
                $skill.ratios = $combatVariant.ratios
                $skill.hits = $combatVariant.hits
            }
        }

        $canonicalSkills[$skill.name] = $skill
    }
}
$skills = @($canonicalSkills.Values)

$catCounts = @{ Physical = 0; Elemental = 0; Support = 0; Passive = 0 }
foreach ($skill in $skills) {
    $catCounts[$skill.category]++
}

# Export to skillData.json
$jsonOutput = $skills | ConvertTo-Json -Depth 4
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'skillData.json'), $jsonOutput, [System.Text.Encoding]::UTF8)

# Export to skillData.js with const declaration
$jsOutput = "const skillData = $jsonOutput;"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'skillData.js'), $jsOutput, [System.Text.Encoding]::UTF8)

Write-Host "Export completed successfully!"
Write-Host "Total skills: $($skills.Count)"
Write-Host "Categories:"
$catCounts.GetEnumerator() | Format-Table -AutoSize
