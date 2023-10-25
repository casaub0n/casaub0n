local opt = vim.opt

-- マウス有効化
opt.mouse = 'a'
opt.title = true

-- 全角文字表示設定
opt.ambiwidth = 'double'

-- number
vim.opt.number = true

vim.opt.tabstop = 2
vim.opt.shiftwidth = 2 -- 自動インデント時に入力する空白の数

-- transparent
vim.opt.termguicolors = true
vim.opt.winblend = 5 -- ウィンドウの不透明度
vim.opt.pumblend = 5 -- ポップアップメニューの不透明度

vim.scriptencoding = 'utf-8'
vim.opt.encoding = 'utf-8'
vim.opt.fileencoding = 'utf-8'

-- Helper function for transparency formatting
local alpha = function()
  return string.format("%x", math.floor((255 * vim.g.transparency) or 0.8))
end

-- g:neovide_transparency should be 0 if you want to unify transparency of content and title bar.
vim.g.neovide_transparency = 0.0
vim.g.transparency = 0.8
vim.g.neovide_background_color = "#0f1117" .. alpha()

-- lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  'nvim-tree/nvim-web-devicons', -- アイコンの表示
  -- バッファ・タブバーをかっこよく
  {
    'romgrk/barbar.nvim',
    dependencies = { 'nvim-web-devicons' },
    event = { 'BufNewFile', 'BufRead' },
  },
  -- color scheme
  {
    "folke/tokyonight.nvim",
    lazy = false,
    priority = 1000,
    opts = {
      transparent = true,
      styles = {
        sidebars = "transparent",
        floats = "transparent",
      },
    },
    config = function()
      vim.cmd [[colorscheme tokyonight-moon]]
    end
  },
  -- status line
  {
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-web-devicons', opt = true },
    event = { 'BufNewFile', 'BufRead' },
    option = { theme = "nord" },
    config = function()
      require("lualine").setup()
    end
  },
})
