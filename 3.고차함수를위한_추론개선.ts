/**
 * @example
 *  def dropWhile[A](l : List[A], f: A => Boolean) : List[A]
 */

const dropWhile = <T>(list: T[], fn: (l: T) => Boolean): T[] => list.filter(fn)

{
  // Functional
  const m1 = dropWhile([1, 2, 3, 4, 5], (l) => l < 3)

  const m2 = dropWhile(['a', 'b', 'c', 'd', 'e'], (a) => a === 'a')
  console.log(m1, m2)
}

const dropWhileCurrying =
  <T>(list: T[]) =>
  (fn: (l: T) => Boolean) =>
    list.filter(fn)

{
  // Currying
  const m3 = dropWhileCurrying([1, 2, 3, 4, 5])((l) => l < 3)
  const m4 = dropWhileCurrying(['a', 'b', 'c', 'd', 'e'])((a) => a === 'a')

  console.log(m3, m4)
}

{
  // Example
  const _map =
    <A, B>(as: A[]) =>
    (fn: (a: A) => B): B[] =>
      as.map((a) => fn(a))

  const m5 = _map([1, 2, 3, 4, 5])((arr) => arr + 10)
  const m6 = _map([1, 2, 3, 4, 5])((arr) => arr.toString())
  console.log(m5, m6)
}

{
  // Example
  const _filter =
    <A>(as: A[]) =>
    (fn: (a: A) => boolean) =>
      as.filter(fn)
}

{
  // Example
  const mergeMap =
    <A, B>(as_1: A[]) =>
    (as_2: B[]) =>
      [...as_1, ...as_2]

  const m7 = mergeMap([1, 2, 3, 4, 5])(['a', 'b', 'c', 'd', 'e'])
  console.log(m7)
}

{
  // Example
  //   const sumMergeMap =
  //     <A, B>(a: A[]) =>
  //     (b: B[]) =>
  //       a.map((item, index) => {
  //         if (typeof item === 'number' && typeof b[index] === 'number') {
  //           return item + b[index]
  //         } else {
  //           return `${item}${b[index]}`
  //         }
  //       })
  //   const m8 = sumMergeMap([1, 2, 3])([4, 5, 6])
  //   console.log(m8)
}
