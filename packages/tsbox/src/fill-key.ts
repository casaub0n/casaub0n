/**
 * TypeScript:判別可能なユニオンの分割代入をしやすくするFillKeysユーティリティー型についての紹介 - Qiita
 * https://qiita.com/suin/items/da635d4112ff51eead68
 */
type Success = {
  type: "success";
  value: number;
};

type Failure = {
  type: "failure";
  error: Error;
};

/**
 * @example
 * declare const result: Success | Failure;
 * const { type, value, error } = result;
 *
 * Property 'value' does not exist on type 'Success | Failure'.
 * Property 'error' does not exist on type 'Success | Failure'.
 */

/**
 * utility type
 */
export type FillKeys<T> = (
  (T extends T ? keyof T : never) extends infer AllKeys
    ? // ↑ユニオン型の全要素のキーを洗い出し、AllKeysに代入する
      T extends T // 各要素ごとに処理したいので、union distributionを発動するための術式
      ? // ↓これはもともとのオブジェクトと、その要素が持たないキーとundefinedのペアからなるオブジェクトをマージする部分
        { [K in keyof T]: T[K] } & {
          [K in AllKeys extends keyof T
            ? never
            : AllKeys extends string
            ? AllKeys
            : never]?: undefined;
        }
      : never
    : never
) extends // ↓この部分は上で計算されたインターセクション型をフラットにする部分。
//  {...} & {...} | {...} & {...}  | {...} & {...} のような見ずらい計算結果を
//  {...} | {...} | {...} のようにきれいにする。この部分は無くても動くので、お好みで。
infer T
  ? { [K in keyof T]: T[K] }
  : never;

/**
 * This is example of using the utility type
 */
declare const result: FillKeys<Success | Failure>;
export const { type, value, error } = result;
