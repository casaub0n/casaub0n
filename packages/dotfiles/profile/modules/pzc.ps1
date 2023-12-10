function pzc {
    if ( -not (Test-Path -Path ".\package.json")) {
        Write-Host "There is no package.json"
        break
    }
    # ConvertFrom-Json is just for styled looking
    $data = Get-Content .\package.json | jq ".scripts" | ConvertFrom-Json | fzf
    $rdata = $data -replace '[\s].*$', ''
    -join ("pnpm ", $rdata) | Write-Output | Invoke-Expression
}
