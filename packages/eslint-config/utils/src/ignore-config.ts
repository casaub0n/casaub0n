import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

export const ignoreConfig: FlatConfig.Config["ignores"] = [
  /**
   * output
   */
  "**/dist/**/*",
  "**/dist/*",

  /**
   * Logs
   */
  "**/*.log*",

  /**
   * Diagnostic reports
   * @see https://nodejs.org/api/report.html
   */
  "**/report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",

  /**
   * Runtime data
   */
  "**/pids",
  "**/*.pid",
  "**/*.seed",
  "**/*.pid.lock",

  /**
   * Directory for instrumented libs generated by jscoverage/JSCover
   */
  "**/lib-cov/**/*",

  /**
   * Coverage directory used by tools like istanbul
   */
  "**/coverage/**/*",
  "**/*.lcov/**/*",

  /**
   * nyc test coverage
   */
  "**/.nyc_output/**/*",

  /**
   * Grunt intermediate storage
   * @see https://gruntjs.com/creating-plugins#storing-task-files
   */
  "**/.grunt/**/*",

  /**
   * Bower dependency directory
   * @see https://bower.io/
   */
  "**/bower_components/*",

  /**
   * node-waf configuration
   */
  "**/.lock-wscript/**",

  /**
   * Compiled binary addons
   * @see https://nodejs.org/api/addons.html
   */
  "**/build/Release",

  /**
   * Dependency directories
   *
   * `node_modules/` is already ignored
   */
  "**/jspm_packages/**",

  /**
   * TypeScript v1 declaration files
   */
  "**/typings/**",

  /**
   * TypeScript cache
   */
  "**/*.tsbuildinfo",

  /**
   * Optional npm cache directory
   */
  "**/.npm",

  /**
   * Optional eslint cache
   */
  "**/.eslintcache",

  /**
   * Microbundle cache
   */
  "**/.rpt2_cache/**",
  "**/.rts2_cache_cjs/**",
  "**/.rts2_cache_es/**",
  "**/.rts2_cache_umd/**",

  /**
   * Optional REPL history
   */
  "**/.node_repl_history",

  /**
   * Output of `npm pack`
   */
  "**/*.tgz",

  /**
   * Yarn Integrity file
   */
  "**/.yarn-integrity",

  /**
   * dotenv environment variables file
   * @todo Should `.env.*` be ignored ?
   */
  "**/.env",
  ".env.test",

  /**
   * parcel-bundler cache
   */
  "**/.cache",

  /**
   * turbo
   */
  "**/.turbo",

  /**
   * tsbox
   */
  "**/tsbox/html/**",
];
