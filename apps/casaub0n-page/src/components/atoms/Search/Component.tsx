// https://zenn.dev/ficilcom/articles/940ecce71e45a6#mapped-types-%E3%81%A8-as

import type { KebabCase } from "type-fest"

/**
 * Base type
 */
type GameSearchState = {
  gameId: number
  nameQuery: string
  isSoldOut: boolean
}

type UrlTypes<T> = {
  [K in keyof T as KebabCase<K>]: string
}

type UrlTypeGameSearchState = UrlTypes<GameSearchState>

/**
 * @see https://zenn.dev/ficilcom/articles/940ecce71e45a6#mapped-types-%E3%81%A8-as
 */
export const search = (state: UrlTypeGameSearchState) => {
  const url = new URL("https://example.com/search")
  Object.entries(state).forEach(([key, value]) => {
    url.searchParams.set(key, value)
  })
  return (window.location.href = url.toString())
}
