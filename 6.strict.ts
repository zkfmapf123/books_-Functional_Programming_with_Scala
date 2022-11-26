{
  /**
   * 비엄격성 코드
   */

  function getResult(num?: number) {
    if (!num) {
      return num
    }

    throw new Error('error')
  }

  //   const r1 = getResult(10)
  //   const r2 = getResult(undefined)
}

{
  /**
   * 비엄격성 코드 + FP -> Thunk 방식
   */
  const ifElsePrint = <T extends void>(cond: boolean, onTrue: () => T, onFalse: () => T) => {
    if (cond) onTrue()
    else onFalse()
  }
  const ifElseReturnVal = <T>(cond: boolean, onTrue: () => T, onFalse: () => T): T => {
    if (cond) {
      return onTrue()
    } else {
      return onFalse()
    }
  }

  const r1 = ifElsePrint(
    10 > 20,
    () => console.log('10 to big'),
    () => console.log('10 to small')
  )

  const r2 = ifElseReturnVal(
    10 > 20,
    () => 100,
    () => 200
  )

  console.log(r2)
}

{
  /**
   * Better Code
   */
  const ifElseBetter = <T>(cond: boolean, t: T, f: T) => {
    if (cond) return t
    return f
  }

  const r1 = ifElseBetter(10 > 20, 100, 200)
  console.log(r1)
}
