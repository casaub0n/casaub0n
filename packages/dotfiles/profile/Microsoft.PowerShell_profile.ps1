<#
    DESKTOP-8VA90LC profile
#>
Invoke-Expression (&starship init powershell)
fnm env --use-on-cd | Out-String | Invoke-Expression

Import-Module posh-git
Import-Module PSFzf
Enable-PsFzfAliases

# fzf https://github.com/kelleyma49/PSFzf#reverse-search-through-psreadline-history-default-chord-ctrlr
Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+t' -PSReadlineChordReverseHistory 'Ctrl+r'

# https://github.com/kelleyma49/PSFzf#tab-expansion
Set-PSReadLineKeyHandler -Key Tab -ScriptBlock { Invoke-FzfTabCompletion }

# https://cli.github.com/manual/gh_completion
Invoke-Expression -Command $(gh completion -s powershell | Out-String)

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

# @see https://learn.microsoft.com/ja-jp/powershell/module/psreadline/about/about_psreadline?view=powershell-7.4
$parameters = @{
    key              = 'Alt-w'
    BriefDescription = 'SaveInHistory'
    LongDescription  = 'Save current line in history but do not execute'
    ScriptBlock      = {
        param($key, $arg)   # The arguments are ignored in this example

        # GetBufferState gives us the command line (with the cursor position)
        $line = $null
        $cursor = $null
        [Microsoft.PowerShell.PSConsoleReadLine]::GetBufferState([ref]$line,
            [ref]$cursor)

        # AddToHistory saves the line in history, but does not execute it.
        [Microsoft.PowerShell.PSConsoleReadLine]::AddToHistory($line)

        # RevertLine is like pressing Escape.
        [Microsoft.PowerShell.PSConsoleReadLine]::RevertLine()
    }
}
Set-PSReadLineKeyHandler @parameters

function pzc {
    $data = Get-Content .\package.json | jq ".scripts" | ConvertFrom-Json | fzf
    $rdata = $data -replace '[\s].*$', ''
    -join ("pnpm ", $rdata) | Write-Output | Invoke-Expression
}
