export const isPositive = (num: number): boolean => {
  return num >= 0;
};

type User = {
  name: string;
  age: number;
  private_: boolean;
};

export const showUserInfo = (user: User): string => {
  return user.name;
};

type IsPositiveFunc = (arg: number) => boolean;
export const isPositiveFunc: IsPositiveFunc = (num) => num >= 0;

export const sumOfPos = (arr: number[]) => {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
};

export const myFilter = <T>(arr: T[], predicate: (elm: T) => boolean): T[] => {
  const result: T[] = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
};

type Speed = "slow" | "medium" | "fast";

export const getSpeed = (speed: Speed): number => {
  switch (speed) {
    case "slow":
      return 10;
    case "medium":
      return 50;
    case "fast":
      return 200;
  }
};

type AddEventListener = {
  capture?: true;
  once?: false;
};

export declare function addEventListener(
  arg: string,
  arg2: () => void,
  arg3?: boolean | AddEventListener,
): void;

type UseStateUpdate<T> = T | ((oldVal: T) => T);

export declare function useState<T>(initVal: T): [T, (updator: UseStateUpdate<T>) => void];

export type PartialUser = Partial<User>;
