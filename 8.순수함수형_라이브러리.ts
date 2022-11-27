/**
 * 합성능력 + 모듈성
 * 서술과 실행은 별개의 케이스로 생각해야 한다.
 * 라이브라자체는 서술에만 신경쓰고, 실행단은 실제 라이브러리를 사용하는 사용자가 선택하게 한다.
 * *** 부수효과를 절대 허용하지 않는다 ***
 */

import { fork, Par, sleep } from './utils'

{
  /**
   * Example 병렬계산기
   */
  const sum = <K>(nums: number[], passCond: (num: number) => K): number =>
    nums.reduce((acc, cur) => {
      if (passCond(cur)) acc += cur
      return acc
    }, 0)

  const r1 = sum([1, 2, 3, 4, 5], (num) => num > 2)
  const r2 = sum([1, 2, 3, 4, 5], () => true)

  console.log(r1, r2)

  // Device And Conquer
  const dacSum = <K>(nums: number[], passCond: (num: number) => K): number => {
    // sleep(2)
    // console.log(nums)

    if (nums.length === 1) {
      const [num] = nums
      if (passCond(num)) {
        return num
      }

      return 0
    }

    const [a1, a2] = fork(nums, nums.length / 2 - 1)
    const result = dacSum(a1, passCond) + dacSum(a2, passCond)
    return result
  }

  const r3 = dacSum([1, 2, 3, 4, 5], (num) => num > 2)
  const r4 = dacSum([1, 2, 3, 4, 5], () => true)

  console.log(r3, r4)
}

{
  // ParSum

  // Device And Conquer
  const parSum = <K>(nums: number[], passCond: (num: number) => K): number => {
    // sleep(2)
    // console.log(nums)

    if (nums.length === 1) {
      const [num] = nums
      if (passCond(num)) {
        return num
      }

      return 0
    }

    const [a1, a2] = fork(nums, nums.length / 2 - 1)
    const sumL = Par.unit(parSum(a1, passCond)) // Lazy
    const sumR = Par.unit(parSum(a2, passCond)) // Lazy
    return Par.get(sumL) + Par.get(sumR)
  }

  const r3 = parSum([1, 2, 3, 4, 5], (num) => num > 2)
  const r4 = parSum([1, 2, 3, 4, 5], () => true)
  console.log(r3, r4)
}

{
  // Example
  const choice = Par.choiceN(10 > 20)(Par.unit([1, 2, 3, 4, 5]), Par.unit([10, 20, 30, 40, 50]))

  console.log(choice)
}
