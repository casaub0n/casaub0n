/**
 * @see https://prettier.io/blog/2023/07/05/3.0.0.html#support-config-files-in-esm-13130httpsgithubcomprettierprettierpull13130-by-fiskerhttpsgithubcomfisker
 */
const prettierConfig = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  jsxSingleQuote: true,
  printWidth: 100,
  useTabs: false,
};

export default prettierConfig;
