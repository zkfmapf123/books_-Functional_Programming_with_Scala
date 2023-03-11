import { optionCasting } from './type/options'
import { eitherMeans, eitherSaveCalc } from './utils/either.fp'
import { map, mergeMap } from './utils/list'
import { match, matchValue } from './utils/match'
import { concatList, getOrElse, mapToList, optionMap } from './utils/option.fp'

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

{
  // Map , recurMap

  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }

  console.time()
  const v1 = map(arr, (l) => l + 10)
  console.timeEnd()
}

{
  // MergeMap
  const v1 = mergeMap<number, number>([1, 2, 3], [4, 5, 6])
  const v2 = mergeMap<number, string, boolean>([1, 2, 3], ['11', '22', '33'], [true, true, false])

  console.log(v1)
  console.log(v2)
}

///////////////////////////////////// Option /////////////////////////////////////////
{
  const l1 = [1, 2, 3, 4, 5]
  const v1 = optionMap(l1, (l) => l + 10) // {tag : 'some', value : [11,12,13,14,15]}
  const v2 = optionMap([], (l) => l) // {tag : 'none'}
  console.log(v1, v2)
}

{
  const l1 = [1, 2, 3, 4, 5]
  const v1 = getOrElse(l1, [1, 2]) // {tag : 'some', value : [11,12,13,14,15]}
  const v2 = getOrElse(l1, [10, 20]) // {tag : 'none'}
  console.log(v1, v2)
}

{
  const optionMap = optionCasting([1, 2, 3, 4, 5].map((item) => item + 10))
  console.log(optionMap)
}

{
  const l1 = [1, 2, 3, 4, 5]
  const l2 = [10, 20, 30, 40, 50]

  const m = mapToList<number>(optionCasting(l1), optionCasting(l2), (a, b) => a + b)
  console.log(m)
}

{
  const v1 = [1, 2, 3, 4, 5]
  const v2 = [10, 20, 30, 40, 50]
  const v3 = [100, 200, 300, 400, 500]

  const list = concatList([v1, v2, v3].map((item) => optionCasting(item)))
  console.log(list)
}

{
  const v1 = [1, 2, 3, 4, 5]
  const v2 = [] as any

  console.log(eitherMeans(v1))
  console.log(eitherMeans(v2))
}

{
  console.log(eitherSaveCalc(10, 20, (a, b) => a / b))
  console.log(eitherSaveCalc(0, NaN, (a, b) => a / b))
}
