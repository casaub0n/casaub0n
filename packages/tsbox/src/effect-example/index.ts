/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { consola } from "consola";
import { Option } from "effect/index";

/**
 *
 * @see https://zenn.dev/optimind/articles/pipe-in-typescript-effect-fpts
 */
const fakeFetchName = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 1: {
      return Option.some("Alice");
    }
    default: {
      return Option.none();
    }
  }
};

consola.log(
  fakeFetchName().pipe(
    Option.map((name) => `${name}さん、こんにちは`),
    Option.getOrElse(() => "誰もいませんね..."),
  ),
);
