/**
 * # Example `get-windows`
 *
 * ## Usage
 *
 * Args is to specific this file as relative path
 *
 * ```console
 * #
 * $ node .\index.ts
 * { platform: 'windows',                                                                                         2:28:41
 *   id: 131716,
 *   title: 'PowerShell',
 *   owner:
 *    { processId: 10096,
 *      path:
 *       'C:\\Program Files\\WindowsApps\\Microsoft.WindowsTerminal_x\\WindowsTerminal.exe',
 *      name: 'Windows Terminal Host' },
 * bounds: { x: 70, y: 78, width: 1009, height: 605 },
 * contentBounds: { x: 78, y: 78, width: 993, height: 597 },
 * memoryUsage: 57417728 }
 * ```
 *
 * [sindresorhus/get-windows: Get metadata about the active window and open windows \(title, id, bounds, owner, etc\)](https://github.com/sindresorhus/get-windows?tab=readme-ov-file#usage)
 */

import { consola } from "consola";
import { activeWindow } from "get-windows";

consola.log(await activeWindow());
