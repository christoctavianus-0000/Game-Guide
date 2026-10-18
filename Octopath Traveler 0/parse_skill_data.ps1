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
    $t = $text -replace '<skl_turn_count2?>\s*turn\(s\)\.?', 'turn(s).'
    $t = $t -replace '<skl_turn_count2?>', 'turn(s)'
    $t = $t -replace '<skl_boostcol>([^<]*)</skl_boostcol>', '$1'
    $t = $t -replace '<[^>]+>', ''
    $t = $t -replace ',\s*\.', '.'
    $t = $t -replace '\.\.', '.'
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
            if ($detail -match 'random foes') { return 'Random Foes' }
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

    $catNum = (($rowMap['Category'] -as [string]) -replace '\.0$', '').Trim()
    $iconId = (($rowMap['SkillIconID'] -as [string]) -replace '\.0$', '').Trim()
    $skillType = (($rowMap['SkillType'] -as [string]) + '').Trim()
    $weaponTypeNum = (($rowMap['WeaponIconType'] -as [string]) -replace '\.0$', '').Trim()
    $magicTypeNum = (($rowMap['MagicIconType'] -as [string]) -replace '\.0$', '').Trim()
    $targetNum = (($rowMap['TargetType'] -as [string]) -replace '\.0$', '').Trim()
    $targetLabel = GetTargetLabel -targetNum $targetNum -detail $detail
    $isWeaponSelect = (($rowMap['IsWeaponSelect'] -as [string]).Trim() -in @('1', '1.0', 'True', 'true'))
    $isAllWeaponsAttack = $detail -match '\bwith all weapons\b'
    $modStatus = (($rowMap['ModifyStatus_Text'] -as [string]) + '').Trim()
    $val1Raw = (($rowMap['Values.1'] -as [string]) + '').Trim()
    $val1 = 0.0
    if ($val1Raw) { [double]::TryParse($val1Raw, [ref]$val1) | Out-Null }
    $isHpDamageAvail = ($modStatus -eq 'Now HP' -and $val1 -lt 0)

    # Determine High-Level Category using authoritative workbook Category (2=Passive, 1=Active) and SkillIconID
    $category = ''
    $subType = ''
    $iconImg = ''

    if ($catNum -eq '2') {
        $category = 'Passive'
        $subType = 'Passive Trait'
        $targetLabel = 'Passive'
    } elseif ($isWeaponSelect -or $isAllWeaponsAttack) {
        $category = 'Physical'
        $subType = if ($isAllWeaponsAttack) { 'All Weapons' } else { 'Weapon Select' }
    } elseif ($skillType -eq 'Phys' -or ($weaponTypeNum -and $weaponTypeNum -ne '0') -or ($iconId -in @('92610', '92616'))) {
        if ($skillType -ne 'Phys' -and (-not $weaponTypeNum -or $weaponTypeNum -eq '0') -and $detail -notmatch '(?i)\bdeal\b.*\bdamage\b' -and $detail -ne '???') {
            $category = 'Support'
            $subType = 'Utility'
        } else {
            $category = 'Physical'
            if ($weaponLabels.ContainsKey($weaponTypeNum)) {
                $subType = $weaponLabels[$weaponTypeNum]
            } elseif ($isAllWeaponsAttack -or $detail -match '(?i)sword.*dagger|sword.*polearm|dagger.*axe') {
                $subType = 'All Weapons'
            } elseif ($detail -match '(?i)\bsword\b') {
                $subType = 'Sword'
            } else {
                $subType = 'Weapon Select'
            }
            if ($subtypeIcons.ContainsKey($subType)) {
                $iconImg = $subtypeIcons[$subType]
            }
        }
    } elseif ($skillType -eq 'Elem' -or ($magicTypeNum -and $magicTypeNum -ne '0') -or ($iconId -in @('92611', '92617'))) {
        $category = 'Elemental'
        $subType = if ($magicLabels.ContainsKey($magicTypeNum)) { $magicLabels[$magicTypeNum] } else { 'Spirit' }
        if ($subtypeIcons.ContainsKey($subType)) {
            $iconImg = $subtypeIcons[$subType]
        }
    } else {
        $category = 'Support'
        if ($iconId -in @('92612', '92618') -or $detail -match '(?i)restore|heal|revive|cure') {
            $subType = 'Recovery'
        } elseif ($iconId -in @('92613', '92619') -and $detail -notmatch '(?i)^lower|^reduce.*foe') {
            $subType = 'Buff'
        } elseif ($iconId -in @('92614', '92620') -or $detail -match '(?i)lower|reduce|inflict|provoke') {
            if ($detail -match '(?i)^discover\b') { $subType = 'Utility' }
            else { $subType = 'Debuff' }
        } elseif ($detail -match '(?i)raise|grant|boost|shield|nullify|fill ultimate') {
            $subType = 'Buff'
        } else {
            $subType = 'Utility'
        }
    }

    # Collect Ailments (1..16)
    $ailments = @()
    for ($a = 1; $a -le 16; $a++) {
        $aName = ($rowMap["Ailment $a"] -as [string])
        if ($aName -and $aName.Trim().Length -gt 0 -and $aName.Trim() -ne 'No data.') {
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
        rawDetail = ($detailRaw + '')
        category = $category
        subType = $subType
        icon = $iconImg
        sp = $sp
        target = $targetLabel
        turns = $turns
        ratios = $ratios
        hits = $hitCounts
        ailments = $ailments
        isHpDamageAvail = $isHpDamageAvail
    }
}

# Group all parsed rows by skill name so we can merge split Avails rows that
# share the canonical skill ID, as well as weapon-selection combat variants.
$rowsByName = [ordered]@{}
foreach ($s in $skills) {
    if (-not $rowsByName.Contains($s.name)) {
        $rowsByName[$s.name] = New-Object System.Collections.Generic.List[object]
    }
    $rowsByName[$s.name].Add($s)
}

$canonicalSkills = [ordered]@{}
foreach ($skillName in $rowsByName.Keys) {
    $allRows = $rowsByName[$skillName]
    $primary = $allRows[0]
    $sameIdRows = @($allRows | Where-Object { $_.id -eq $primary.id })

    # 1. Merge Ailments across all Avails rows of the canonical ID
    $mergedAilments = @()
    $seenAilments = @{}
    foreach ($r in $sameIdRows) {
        foreach ($ail in $r.ailments) {
            if (-not $seenAilments.ContainsKey($ail.name)) {
                $seenAilments[$ail.name] = $true
                $mergedAilments += $ail
            }
        }
    }
    $primary.ailments = $mergedAilments

    # 2. Merge Boost Ratios if Row 0 is a status/debuff Avails row with [100,100,100,100]
    $isDefaultRatios = ($primary.ratios[0] -eq 100 -and $primary.ratios[1] -eq 100 -and $primary.ratios[2] -eq 100 -and $primary.ratios[3] -eq 100)
    if ($isDefaultRatios) {
        $ratioRow = $sameIdRows | Where-Object {
            ($_.ratios[0] -ne 100 -or $_.ratios[1] -ne 100 -or $_.ratios[2] -ne 100 -or $_.ratios[3] -ne 100) -and
            ($_.ratios | Where-Object { $_ -gt 0 })
        } | Select-Object -First 1
        if ($ratioRow) {
            $primary.ratios = $ratioRow.ratios
            if ($primary.target -eq 'Self' -and $ratioRow.target -ne 'Self') {
                $primary.target = $ratioRow.target
            }
        }
    }

    # 3. Fix Target when Row 0 had TargetType=14 (Self) on an enemy-targeting skill
    if ($primary.target -eq 'Self') {
        $otherTargetRow = $sameIdRows | Where-Object { $_.target -ne 'Self' -and $_.target -ne 'Passive' } | Select-Object -First 1
        if ($otherTargetRow -and $primary.detail -match '(?i)\b(foe|foes|ally|allies)\b') {
            $primary.target = $otherTargetRow.target
        } elseif ($primary.detail -match '(?i)all foes') {
            $primary.target = 'All Foes'
        } elseif ($primary.detail -match '(?i)random foes') {
            $primary.target = 'Random Foes'
        } elseif ($primary.detail -match '(?i)\ba foe\b') {
            $primary.target = 'Single Foe'
        }
    }

    # 4. Merge Turns if Row 0 has '0,0,0,0' and another row of same ID has non-zero turns
    if (-not $primary.turns -or $primary.turns -eq '0,0,0,0') {
        $turnRow = $sameIdRows | Where-Object { $_.turns -and $_.turns -ne '0,0,0,0' } | Select-Object -First 1
        if ($turnRow) {
            $primary.turns = $turnRow.turns
        }
    }

    # 5. Merge or derive Hit Counts
    $hasHits = [bool]($primary.hits | Where-Object { $_ -gt 0 })
    if (-not $hasHits) {
        $hitRow = $sameIdRows | Where-Object { $_.hits | Where-Object { $_ -gt 0 } } | Select-Object -First 1
        if ($hitRow) {
            $primary.hits = $hitRow.hits
            $hasHits = $true
        }
    }

    # Weapon-selection / All-Weapons wrapper rows hold the description on Row 0
    # and the combat values on their generated weapon rows.
    if ($primary.subType -in @('Weapon Select', 'All Weapons')) {
        $combatVariant = $allRows | Where-Object {
            $_.category -eq 'Physical' -and
            (($_.ratios[1] -ne 100) -or ($_.ratios[2] -ne 100) -or ($_.ratios[3] -ne 100) -or ($_.hits | Where-Object { $_ -gt 0 }) -or $_.isHpDamageAvail)
        } | Select-Object -First 1

        if ($combatVariant) {
            if ($primary.target -in @('Self', 'Special Target')) {
                $primary.target = $combatVariant.target
            }
            if ($primary.ratios[0] -eq 100 -and $primary.ratios[1] -eq 100 -and $primary.ratios[2] -eq 100 -and $primary.ratios[3] -eq 100) {
                $primary.ratios = $combatVariant.ratios
            }
            if (-not $hasHits -and ($combatVariant.hits | Where-Object { $_ -gt 0 })) {
                $primary.hits = $combatVariant.hits
                $hasHits = $true
            }
        }
    }

    # Derive hit counts from <skl_exec_count> BoostSkills or Now HP Avails rows
    if (-not $hasHits -and $primary.rawDetail -match '<skl_exec_count>') {
        $uniqueIds = @($allRows | ForEach-Object { $_.id } | Select-Object -Unique)
        if ($uniqueIds.Count -ge 4) {
            $boostHits = @()
            foreach ($uid in $uniqueIds[0..3]) {
                $cnt = @($allRows | Where-Object { $_.id -eq $uid -and $_.isHpDamageAvail }).Count
                $boostHits += $cnt
            }
            if ($boostHits | Where-Object { $_ -gt 0 }) {
                $primary.hits = $boostHits
                $hasHits = $true
            }
        }
    }

    if (-not $hasHits) {
        $hpAvailCount = @($sameIdRows | Where-Object { $_.isHpDamageAvail }).Count
        if ($hpAvailCount -eq 0 -and $allRows.Count -gt $sameIdRows.Count) {
            $firstHpRow = $allRows | Where-Object { $_.isHpDamageAvail } | Select-Object -First 1
            if ($firstHpRow) {
                $hpAvailCount = @($allRows | Where-Object { $_.id -eq $firstHpRow.id -and $_.isHpDamageAvail }).Count
            }
        }
        if ($hpAvailCount -gt 0) {
            $primary.hits = @($hpAvailCount, $hpAvailCount, $hpAvailCount, $hpAvailCount)
        }
    }

    $canonicalSkills[$skillName] = [PSCustomObject]@{
        id = $primary.id
        name = $primary.name
        detail = $primary.detail
        category = $primary.category
        subType = $primary.subType
        icon = $primary.icon
        sp = $primary.sp
        target = $primary.target
        turns = $primary.turns
        ratios = $primary.ratios
        hits = $primary.hits
        ailments = $primary.ailments
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
