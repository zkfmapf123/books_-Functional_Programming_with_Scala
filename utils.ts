/**
 * go, asyncGo
 */
export const go = <T>(params: T, ...fns: Function[]): T => {
  for (const fn of fns) params = fn(params)
  return params
}

/**
 * tuple
 */
export function tuple<A, B>(a: A, b: B): any[]
export function tuple<A, B, C>(a: A, b: B, c?: C): any[]
export function tuple<A, B, C, D>(a: A, b: B, c?: C, d?: D): any[]
export function tuple<A, B, C, D, E>(a: A, b: B, c?: C, d?: D, e?: E): any[] {
  return [a, b, c, d, e].filter((item) => item)
}

/**
 * Option
 */
export namespace Option {
  export const map = <A>() => {}

  export const filter = () => {}

  export const flatMap = () => {}

  // 해당 값이 없다면 ->
  export const getOrElse = () => {}

  export const orElse = () => {}
}

/**
 * Either
 */
export namespace Either {}

/**
 * Lazy
 */
export namespace Lazy {}
