import { first, isMergeToEqual, last, testGo } from './testUtils'
import { makeArrForRange } from './utils'

{
  /**
   * Example
   * 목록을 뒤집어서 합산해도 원래의 목록의 합산과 같은 결과가 나와야 한다.
   * 목록의 모든 요소가 값이 같다면 그 합은 어떨까?
   * 최댓값, 최솟값을 찾는 함수를 명시하는 속성이 있는가?
   */
  const intList = makeArrForRange(1, 100)
  const testProps = testGo(
    intList,
    (list: number[]) => isMergeToEqual(list.reverse().reverse(), intList),
    (list: number[]) => first(list.reverse().reverse()) === intList[0],
    (list: number[]) => last(list.reverse().reverse()) === intList[list.length - 1]
  )

  if (testProps) {
    console.log('All Test Pass')
  } else {
    throw new Error('err test failed')
  }
}
