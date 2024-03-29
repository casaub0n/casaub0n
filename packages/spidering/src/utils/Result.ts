export type Result<T, E> = Success<T, E> | Failure<T, E>;

export class DoSomethingError extends Error {}
export class Success<T, E> {
  // eslint-disable-next-line no-unused-vars
  constructor(readonly value: T) {}
  type = "success" as const;
  isSuccess(): this is Success<T, E> {
    return true;
  }
  isFailure(): this is Failure<T, E> {
    return false;
  }
}

export class Failure<T, E> {
  // eslint-disable-next-line no-unused-vars
  constructor(readonly value: E) {}
  type = "failure" as const;
  isSuccess(): this is Success<T, E> {
    return false;
  }
  isFailure(): this is Failure<T, E> {
    return true;
  }
}
