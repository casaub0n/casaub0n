/**
 * 0 or more is true
 */
export const isPositive = (number_: number): boolean => {
  return number_ >= 0;
};

type User = {
  /**
   * @example name = bob;
   */
  name: string;
  /**
   * @example age = 23;
   */
  age: number;
  /**
   * not sure
   */
  private_: boolean;
};

/**
 * @param user const examplePerson = { name: "B", age: 18, private_: false } satisfies Parameters<typeof userName>[0]
 */
export const userName = (user: User): string => user.name;

type IsPositiveFunction = (argument: number) => boolean;
export const isPositiveFunction: IsPositiveFunction = (number_) => number_ >= 0;

export const sumOfPos = (array: number[]) => {
  return array
    .filter((number_) => number_ >= 0)
    .reduce((accumulator, number_) => accumulator + number_, 0);
};

export const myFilter = <T>(array: T[], predicate: (elm: T) => boolean): T[] => {
  const result: T[] = [];
  for (const elm of array) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
};

type Speed = "slow" | "medium" | "fast";

/**
 * each velocities level answer actual mount
 */
export const getSpeed = (speed: Speed): number => {
  switch (speed) {
    case "slow": {
      return 10;
    }
    case "medium": {
      return 50;
    }
    case "fast": {
      return 200;
    }
  }
};

type AddEventListener = {
  capture?: true;
  once?: false;
};

export declare function addEventListener(
  argument: string,
  argument2: () => void,
  argument3?: boolean | AddEventListener,
): void;

type UseStateUpdate<T> = T | ((oldValue: T) => T);

export declare function useState<T>(initValue: T): [T, (updator: UseStateUpdate<T>) => void];

export type PartialUser = Partial<User>;
