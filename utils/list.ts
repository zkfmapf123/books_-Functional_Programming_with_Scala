//////////////////////////// Recur //////////////////////////

// Map
export function map<T>(list: T[], fn: (a: T) => T) {
  return list.map(fn)
}

// MergeMap
export function mergeMap<A, B>(a: A[], b: B[]): (A | B)[]
export function mergeMap<A, B, C>(a: A[], b: B[], c?: C[]): (A | B | C)[]
export function mergeMap<A, B, C, D>(a: A[], b: B[], c?: C[], d?: D[]): (A | B | C | D)[]
export function mergeMap<A, B, C, D, E>(a: A[], b: B[], c?: C[], d?: D[], e?: E[]): (A | B | C | D | E)[]
export function mergeMap<A, B, C, D, E, F>(a: A[], b: B[], c?: C[], d?: D[], e?: E[], f?: F[]): (A | B | C | D | E | F)[] {
  let arr: (A | B | C | D | E | F)[] = []
  for (const list of [a, b, c, d, e, f]) {
    if (list) {
      arr = [...arr, ...list]
    }
  }

  return arr
}
