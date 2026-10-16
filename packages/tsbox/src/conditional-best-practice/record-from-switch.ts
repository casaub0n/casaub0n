const MagicType = {
  FIRE: "fire",
  WATER: "water",
  THUNDER: "thunder",
  WIND: "wind",
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

/**
 * [【TypeScript】条件分岐のベストプラクティス ── ネスト・switch・フラグ引数を卒業しよう #初心者 - Qiita](https://qiita.com/Nao52/items/38757bc86c30f0326519)
 *
 * > ⚠️ MagicType.WINDが追加されても、switchはコンパイルエラーにならず実行時まで気づけません。
 *
 * MagicType is union type, so `switch` can realize wrong type, but `switch` doesn't matter full MagicType elements.
 *
 * @see [❌ NG: switchを使った実装](https://qiita.com/Nao52/items/38757bc86c30f0326519#-ng-switch%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E5%AE%9F%E8%A3%85)
 */
export function getMagicInfo(type: MagicType): MagicResult {
  switch (type) {
    case MagicType.FIRE:
      return { attack: 10, tpCost: 30, isAllTarget: false };
    case MagicType.WATER:
      return { attack: 5, tpCost: 10, isAllTarget: false };
    case MagicType.THUNDER:
      return { attack: 8, tpCost: 35, isAllTarget: true };
    default:
      throw new Error("不明な魔法タイプ");
  }
}

export type Magic = {
  name: string;
  attack: number;
  tpCost: number;
  isAllTarget: boolean;
};

/**
 * [【TypeScript】条件分岐のベストプラクティス ── ネスト・switch・フラグ引数を卒業しよう #初心者 - Qiita](https://qiita.com/Nao52/items/38757bc86c30f0326519)
 *
 * Record type has to fill full MagicType elements
 *
 * @see [✅ OK: Record<Enum, T> のmapで型安全に](https://qiita.com/Nao52/items/38757bc86c30f0326519#-ok-recordenum-t-%E3%81%AEmap%E3%81%A7%E5%9E%8B%E5%AE%89%E5%85%A8%E3%81%AB)
 */
export const MAGIC_MAP: Record<MagicType, Magic> = {
  [MagicType.FIRE]: {
    name: "炎魔法",
    attack: 10,
    tpCost: 30,
    isAllTarget: false,
  },
  [MagicType.WATER]: {
    name: "水魔法",
    attack: 5,
    tpCost: 10,
    isAllTarget: false,
  },
  [MagicType.THUNDER]: {
    name: "雷魔法",
    attack: 8,
    tpCost: 35,
    isAllTarget: true,
  },
  [MagicType.WIND]: {
    name: "風魔法",
    attack: 9,
    tpCost: 25,
    isAllTarget: true,
  },
};

export function canUseMagic(type: MagicType, currentTp: number): boolean {
  const magic = MAGIC_MAP[type];
  return currentTp >= magic.tpCost;
}
