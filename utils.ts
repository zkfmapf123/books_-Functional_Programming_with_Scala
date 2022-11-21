/**
 * tuple
 */
export function tuple<A, B>(a: A, b: B): any[]
export function tuple<A, B, C>(a: A, b: B, c?: C): any[]
export function tuple<A, B, C, D>(a: A, b: B, c?: C, d?: D): any[]
export function tuple<A, B, C, D, E>(a: A, b: B, c?: C, d?: D, e?: E): any[] {
  return [a, b, c, d, e].filter((item) => item)
}