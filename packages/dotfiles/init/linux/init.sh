#!/bin/sh -xeu
sudo apt-get update

#zshのインストールと設定
./script/zsh.sh

#tmux
./script/tmux.sh