# catalog

[storybook GitHub pages](https://casaub0n.github.io/casaub0n/)

This configure files is written by ES Modules. I dont't use TypeScript in this case because it must conflict loaded projects.

## vanilla extract

[Integrate Vanilla Extract with Storybook | Storybook](https://storybook.js.org/recipes/@vanilla-extract/css)

## Problem

GitHub pages doesn't support image files.

[staticDirs](https://storybook.js.org/docs/react/api/main-config-static-dirs) is a good solution, but it is impossible because in this case, we wanna use GitHub's asset files as example ☞ https://github.com/casaub0n/casaub0n/blob/main/apps/casaub0n-page/public/images/me.jpg?raw=true

so it must use regular expression.

## Tests results

**local**
[Tests results report](./__reports__/jest.html)

**GitHub Pages**
[Test results report](https://casaub0n.github.io/casaub0n/__reports__/jest.html)
