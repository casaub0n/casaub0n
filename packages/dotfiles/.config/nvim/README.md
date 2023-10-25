# my nvim config

```PowerShell
# sudo su -
Start-Process powershell -verb runas

# make symbolic link of init file from here
New-Item -ItemType SymbolicLink -Path $HOME\AppData\Local\nvim\init.lua -Value $HOME\sandbox\casaub0n\packages\.config\nvim\init.lua

# make symbolic link of lock file from here
New-Item -ItemType SymbolicLink -Path $HOME\AppData\Local\nvim\lazy-lock.json -Value $HOME\sandbox\casaub0n\packages\.config\nvim\lazy-lock.json
```
