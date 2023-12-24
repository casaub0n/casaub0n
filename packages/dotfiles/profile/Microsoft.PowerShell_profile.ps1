<#
    DESKTOP-8VA90LC profile
#>
Invoke-Expression (&starship init powershell)
fnm env --use-on-cd | Out-String | Invoke-Expression

Import-Module posh-git
Import-Module PSFzf
Enable-PsFzfAliases

Import-Module DockerCompletion

# fzf https://github.com/kelleyma49/PSFzf#reverse-search-through-psreadline-history-default-chord-ctrlr
Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+t' -PSReadlineChordReverseHistory 'Ctrl+r'

# https://github.com/kelleyma49/PSFzf#tab-expansion
Set-PSReadLineKeyHandler -Key Tab -ScriptBlock { Invoke-FzfTabCompletion }

# https://cli.github.com/manual/gh_completion
Invoke-Expression -Command $(gh completion -s powershell | Out-String)

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

$psdir = "$HOME\sandbox\casaub0n\packages\dotfiles\profile"
Write-Host ("Load PS Profiles from {0}\modules" -f $psdir) -ForegroundColor DarkCyan
Get-ChildItem $psdir\modules | Where-Object Extension -eq ".ps1" | ForEach-Object { .$_.FullName }
