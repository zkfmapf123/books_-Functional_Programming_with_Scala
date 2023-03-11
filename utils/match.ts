////////////////////////////// Match //////////////////////////

// match
export function match<T>(list: T, a: (l: T) => boolean): boolean | null
export function match<T>(list: T, a: (l: T) => boolean, b?: (l: T) => boolean): boolean | null
export function match<T>(list: T, a: (l: T) => boolean, b?: (l: T) => boolean, c?: (l: T) => boolean): boolean | null
export function match<T>(list: T, a: (l: T) => boolean, b?: (l: T) => boolean, c?: (l: T) => boolean, d?: (l: T) => boolean): boolean | null
export function match<T>(
  list: T,
  a: (l: T) => boolean,
  b?: (l: T) => boolean,
  c?: (l: T) => boolean,
  d?: (l: T) => boolean,
  e?: (l: T) => boolean
): boolean | null
export function match<T>(
  list: T,
  a: (l: T) => boolean,
  b?: (l: T) => boolean,
  c?: (l: T) => boolean,
  d?: (l: T) => boolean,
  e?: (l: T) => boolean,
  f?: (l: T) => boolean
): boolean
export function match<T>(
  list: T,
  a: (l: T) => boolean,
  b?: (l: T) => boolean,
  c?: (l: T) => boolean,
  d?: (l: T) => boolean,
  e?: (l: T) => boolean,
  f?: (l: T) => boolean,
  g?: (l: T) => boolean
): boolean {
  for (const fn of [a, b, c, d, e, f, g]) {
    if (fn && fn(list)) return true
  }

  return false
}

// matchValue
export function matchValue<A, B>(l: A, a: (l: A) => [boolean, B]): B | null
export function matchValue<A, B, C>(l: A, a: (l: A) => [boolean, B], b?: (l: A) => [boolean, C]): B | C | null
export function matchValue<A, B, C, D>(
  l: A,
  a: (l: A) => [boolean, B],
  b?: (l: A) => [boolean, C],
  c?: (l: A) => [boolean, D]
): B | C | D | null
export function matchValue<A, B, C, D, E>(
  l: A,
  a: (l: A) => [boolean, B],
  b?: (l: A) => [boolean, C],
  c?: (l: A) => [boolean, D],
  d?: (l: A) => [boolean, E]
): B | C | D | E | null
export function matchValue<A, B, C, D, E, F>(
  l: A,
  a: (l: A) => [boolean, B],
  b?: (l: A) => [boolean, C],
  c?: (l: A) => [boolean, D],
  d?: (l: A) => [boolean, E],
  e?: (l: A) => [boolean, F]
): B | C | D | E | F | null {
  for (const fn of [a, b, c, d, e]) {
    if (fn) {
      const [isTrue, v] = fn(l)
      if (isTrue) return v
    }
  }

  return null
}
