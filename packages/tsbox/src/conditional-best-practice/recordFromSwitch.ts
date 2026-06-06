const MagicType = {
  FIRE: "fire",
  WATER: "water",
  THUNDER: "thunder",
} as const;

/**
 * alternate enum ↓
 * ```typescript
 * export enum MagicType {
 *   FIRE = "fire",
 *   WATER = "water",
 *   THUNDER = "thunder",
 * }
 * ````
 * @see https://zenn.dev/jiftechnify/articles/eject-enums-from-typescript-codebase#%E8%83%8C%E6%99%AF
 */
export type MagicType = (typeof MagicType)[keyof typeof MagicType];

export type MagicResult = {
  attack: number;
  tpCost: number;
  isAllTarget: boolean;
};
