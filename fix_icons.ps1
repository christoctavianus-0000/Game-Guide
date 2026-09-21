$File = "d:\My AI Project\Game Guide\equipmentData.js"
$Content = Get-Content $File -Raw -Encoding UTF8

$Replacements = @{
    "Headgear" = "assets/icons/icon_headgear.svg"
    "Body Armor" = "assets/icons/icon_body_armor.svg"
    "Shield" = "assets/icons/icon_shield.svg"
    "Accessories" = "assets/icons/icon_accessories.svg"
}

$Count = 0

foreach ($Type in $Replacements.Keys) {
    $Pattern = "\"type\": \"" + $Type + "\",\r?\n\s+\"icon\": \"\""
    $Replacement = "`"type`": `" + $Type + `",`r`n    `"icon`": `" + $Replacements[$Type] + `"`""
    
    $NewContent = $Content -replace $Pattern, $Replacement
    
    if ($NewContent -cne $Content) {
        $Matches = ([regex]::Matches($Content, $Pattern)).Count
        $Count += $Matches
        $Content = $NewContent
        Write-Host "Replaced $Matches items for $Type"
    }
}

$Content | Set-Content $File -Encoding UTF8
Write-Host "Total replacements: $Count"
