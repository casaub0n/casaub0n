Invoke-Expression (&starship init powershell)
fnm env --use-on-cd | Out-String | Invoke-Expression

Import-Module posh-git
Import-Module PSFzf
Enable-PsFzfAliases