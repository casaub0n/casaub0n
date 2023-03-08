# version check for Powershell
winget search Microsoft.PowerShell
# powershell update
winget install --id Microsoft.Powershell --source winget

# scoop installation https://scoop.sh/
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
Invoke-RestMethod get.scoop.sh | Invoke-Expression

# git
scoop install git
scoop bucket add github-gh https://github.com/cli/scoop-gh.git
scoop install gh

# fnm installation https://github.com/Schniz/fnm#using-scoop-windows
scoop install fnm
fnm env --use-on-cd | Out-String | Invoke-Expression

# administrator
Start-Process PowerShell.exe -Verb runas

# install node
fnm install ../.node-version
New-item -Type SymbolicLink $HOME\.node-version -Value ..\.node-version

# starship
scoop install starship
New-Item -Type SymbolicLink $HOME\.config\starship.toml -Value ..\starship.toml

# install my profile
$ProfileFilePath = Split-Path $PROFILE
New-Item -ItemType Directory $ProfileFilePath
New-Item -Type SymbolicLink $PROFILE -Value ..\Microsoft.PowerShell_profile.ps1
