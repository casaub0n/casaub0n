# administrator
Start-Process PowerShell.exe -Verb runas

# for fnm
New-item -Type SymbolicLink $HOME\.node-version -Value ..\.node-version

New-Item -Type SymbolicLink $HOME\.config\starship.toml -Value ..\starship.toml