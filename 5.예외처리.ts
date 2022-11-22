import { Option } from './utils'
/**
 * -----------------------------------  Problem ----------------------------------------
 */

{
  /**
   * Exception Mean
   * 추론이 불가능하다
   * 깨끗하지 않다
   */
  const mean = (as?: number[]) => {
    if (!as) {
      throw new Error(`invalid value -> not array`)
    }

    return as.reduce((acc, cur) => acc + cur, 0) / as.length
  }

  const m1 = mean([1, 2, 3, 4, 5])

  try {
    mean()
  } catch (e) {
    console.log('error')
  }

  console.log(m1)
}

{
  /**
   * 예외처리를 하지 않은 경우) 가짜값을 던져준다
   * 1. 오류가 소리없이 전파 -> 컴파일에서 잡히지 않는다.
   * 2. if 덕지덕지가 발생한다.
   * 3. 코드를 확장하기 어렵다
   */

  const mean_1 = (as?: number[]) => {
    if (!as) return -1
    return as.reduce((acc, cur) => acc + cur, 0) / as.length
  }

  const m2 = mean_1()
  console.log(m2)
}

{
  /**
   * 예외처리를 하지 않은 경우) 고차함수로 세팅값을 정해준다
   * 뭐... 좋은 방법은 아님
   */

  const mean_3 = (as?: number[], onEmpty?: number) => {
    if (!as) return onEmpty
    return as.reduce((acc, cur) => acc + cur, 0) / as.length
  }

  const m3 = mean_3(undefined, 10)
  console.log(m3)
}

/**
 * -----------------------------------  Solution --------------------------------------
 */
