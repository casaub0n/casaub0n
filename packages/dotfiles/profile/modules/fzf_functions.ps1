<#
    fzf utility functions
#>

# https://zenn.dev/mebiusbox/articles/b922c7e6ded49a
function navi() {
    $data = ConvertFrom-Yaml (Get-Content -raw $env:USERPROFILE\navi.yaml)
    $command = $data.items.keys | ForEach-Object {
        Write-Output ("{0}`t{1}`t{2}" -f $_, $data.items.($_).description, $data.items.($_).command)
    }
    | fzf --reverse --ansi --preview 'echo {} | sd "\"(\w+)\t+(.+)\t+(.+)\"" "\033[0;36m$2 \033[0;32m[$1]\n\033[1;93m> $3\033[0m"' --preview-window=up:40% --tabstop=50
    if ($command -ne "") {
        if ($command -match '(\w+)\t+(.+)\t+(.+)') {
            if ($args.Length -gt 0 -and $args[0] -eq "-r") {
                Write-Host ("> {0}" -f $Matches.3)
                $Matches.3 | Invoke-Expression
            }
            else {
                Write-Output $Matches.3
                [Microsoft.PowerShell.PSConsoleReadLine]::AddToHistory($Matches.3)
            }
        }
    }
}
function nav() {
    navi("-r")
}
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

function emof {
    # PowerShellで外部コマンドの出力が文字化けする場合の対処法
    # 一時的にコンソールの出力エンコードをutf-8にしてコマンドの実行後に元に戻す
    # https://ascii.jp/elem/000/004/140/4140455/
    # エンコーディングの一覧
    # https://learn.microsoft.com/ja-jp/dotnet/api/system.text.encoding?view=net-7.0#list-of-encodings
    $TempMyOutputEncode = [System.Console]::OutputEncoding
    [System.Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding('utf-8')
    $emoji = curl -sSL 'https://git.io/JXXO7'
    $selected_emoji = Write-Output $emoji | fzf
    Write-Output $selected_emoji
    [System.Console]::OutputEncoding = $TempMyOutputEncode
}
