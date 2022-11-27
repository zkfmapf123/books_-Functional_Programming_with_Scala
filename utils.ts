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

/**
 * TranspositionMap
 */
export const transposition = <A, B>(ra: A, rb: A, fn: (ra: A, rb: A) => B): B => fn(ra, rb)

/**
 * Utils
 */
export const fork = <T>(arr: T[], _index: number): [T[], T[]] => {
  if (arr.length < _index) {
    throw new Error(`arr length : ${arr.length}, index : ${_index} => over the index`)
  }

  let [a1, a2] = [[], []]

  arr.forEach((item, index) => {
    if (index <= _index) {
      a1.push(item)
    } else {
      a2.push(item)
    }
  })

  return [a1, a2]
}

export const sleep = (sec: number) => {
  let start = Date.now(),
    now = start
  while (now - start < sec * 1000) {
    now = Date.now()
  }
}

export const sum = (arr: number[]) => arr.reduce((acc, cur) => acc + cur + 0)

export const makeArrForRange = (start: number, end: number): number[] => {
  let result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

/**
 * Par
 */
export namespace Par {
  /**
   * 굳이 구현하지 않겠음... P
   */
  type P = any

  const makePar = <T>(a: T): P => {
    return a
  }

  export const unit = <T extends unknown | unknown[]>(a: T) => {
    if (!Array.isArray(a)) return makePar(a)

    return a.map((item) => makePar(item))
  }

  export const get = <T extends P | P[]>(a: T) => {
    if (!Array.isArray(a)) return a
    return a.map((item) => item)
  }

  export const map2 = (sumL: number[], sumR: number[]) => sum(sumL) + sum(sumR)

  export const parSum = (a: number[]) => a.reduce((acc, cur) => acc + cur, 0)

  export const choiceN = (cond: boolean) => (t: P[], f: P[]) => {
    if (cond) return parSum(t)
    return parSum(f)
  }
}
