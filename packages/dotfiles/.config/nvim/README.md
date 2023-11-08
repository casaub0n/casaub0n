# my nvim config
![my neovim](https://github.com/casaub0n/casaub0n/assets/6220791/e45e4cbc-e13a-41cd-b75d-5f6079705407)

```PowerShell
# sudo su -
Start-Process powershell -verb runas

# make symbolic link of init file from here
New-Item -ItemType SymbolicLink -Path $HOME\AppData\Local\nvim\init.lua -Value $HOME\sandbox\casaub0n\packages\.config\nvim\init.lua

# make symbolic link of lock file from here
New-Item -ItemType SymbolicLink -Path $HOME\AppData\Local\nvim\lazy-lock.json -Value $HOME\sandbox\casaub0n\packages\.config\nvim\lazy-lock.json
```
