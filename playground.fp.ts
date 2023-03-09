import { match, matchValue } from './fp.util'

{
  // Recursive 재귀
  const fibo = (num: number): number => {
    if (num === 0) return 0
    if (num === 1) return 1

    return fibo(num - 1) + fibo(num - 2)
  }
  console.log('fibo : ', fibo(10))
}

{
  // Get First Data
  const getReturnFirstValue = <A>(list: A[] | undefined) => {
    if (list?.length === 0 || !list) return -1
    return list[0] ? list[0] : -1
  }

  const findFirst = <A>(list: A[], key: A, returnCb: (list: A[] | undefined) => number): number =>
    returnCb(
      list
        .map((item, idx) => {
          if (item === key) return idx
        })
        .filter((item) => item) as unknown as A[]
    )

  console.log(findFirst([], 3, getReturnFirstValue))
  console.log(findFirst([1, 2, 3, 4], 3, getReturnFirstValue)) // 2
  console.log(findFirst([1, 2, 3, 4], 2, getReturnFirstValue)) // 1
  console.log(findFirst([1, 2, 3, 4], 10, getReturnFirstValue)) // -1
}

{
  // Check Sorted Data
  const isSorted = <A>(list: A[], order: (list: A[]) => boolean) => order(list)
  console.log(
    isSorted([1, 2, 3, 4, 5], (list) => {
      let [isSorted, i, j] = [true, 0, 1]
      while (j < list.length) {
        if (list[i] > list[j]) {
          isSorted = false
          break
        }

        i++
        j++
      }

      return isSorted
    })
  )
}

{
  // 함수 타입 전달
  // C -> B -> A
  function move<A, B, C>(v: A, transferCb: (v: A) => B, concatCb: (v: B) => C): C {
    return concatCb(transferCb(v))
  }

  const v = move(
    'leedonggyu',
    (v) => v.charAt(3),
    (v) => v.concat(' hello')
  )

  console.log(v)
}

{
  const list = [1, 2, 3, 4, 5]

  const isMatch = match<number[]>(
    list,
    (l) => l.includes(1),
    (l) => l.includes(2),
    (l) => l.includes(3),
    (l) => l.includes(4)
  )

  console.log(isMatch)
}

{
  const list = [1, 2, 3, 4, 5]
  const list2 = [10, 20, 30, 40, 50]

  const reducer = (list: number[]) => list.reduce((acc, cur) => acc + cur, 0)

  const listMoreThan10 = (list: number[]): [boolean, number] => {
    if (list.filter((item) => item >= 10)?.length === 0) return [false, 0]
    return [true, reducer(list)]
  }

  const listAllMinus = (list: number[]): [boolean, number] => {
    if (list.filter((item) => item <= -1)?.length === 0) return [false, 0]
    return [true, reducer(list)]
  }

  const listAllPlus = (list: number[]): [boolean, number] => {
    if (list.filter((item) => item >= 1)?.length === 0) return [false, 0]
    return [true, reducer(list)]
  }

  const value = matchValue<number[], number, number, number>(list, listMoreThan10, listAllMinus, listAllPlus)
  const value2 = matchValue<number[], number, number, number>(list2, listMoreThan10, listAllMinus, listAllPlus)
  console.log(value, value2)
}
