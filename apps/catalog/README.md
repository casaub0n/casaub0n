# catalog

[storybook GitHub pages](https://casaub0n.github.io/casaub0n/)

By Storybook v7, see below

- [storybook/MIGRATION.md at next · storybookjs/storybook · GitHub](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md)
- [storybook/code/frameworks/nextjs at next · storybookjs/storybook · GitHub](https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs)

## Panda CSS

I followd [panda-css doc](https://panda-css.com/docs/installation/storybook)

But this is not enough for monorepo storybook. I added postcss config for storybook

<!-- TODO more details -->

- [Next.js + Tailwind CSS + Storybook のセットアップ](https://zenn.dev/youichiro/articles/d625e602ed47c1)
- [Integrate Tailwind CSS with Storybook | Storybook](https://storybook.js.org/recipes/tailwindcss)

## Problem

GitHub pages doesn't support image files.

[staticDirs](https://storybook.js.org/docs/react/api/main-config-static-dirs) is a good solution, but it is impossible because in this case, we wanna use GitHub's asset files as example ☞ https://github.com/casaub0n/casaub0n/blob/main/apps/vitalform/public/images/me.jpg?raw=true

so it must use regular expression.
