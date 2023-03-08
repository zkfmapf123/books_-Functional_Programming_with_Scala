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
