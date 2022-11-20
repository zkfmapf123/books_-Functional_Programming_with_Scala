/**
 * @title 고차함수
 * @desc
 * 다른 함수를 인수로 받는 함수
 * function(cb : Function) {} // 고차함수
 */

// Recursive
function go(n: number, acc = 1): number {
  if (n <= 0) return acc
  else {
    return go(n - 1, n * acc)
  }
}

// Tail
function tail(n: number, prev = 1, prevFibo = 0): number {
  if (n === 0) {
    return prevFibo
  }

  if (n === 1) {
    return prev
  }

  return tail(n - 2) + tail(n - 1)
}

{
  // use Example
  const formatResult = <T>(name: string, n: T, fn: (n: T) => T) => {
    console.log(name)
    return fn(n)
  }

  console.log(formatResult('Recursive', 5, go))
  console.log(formatResult('Fibonacci', 5, tail))
}

{
  // use Example 1

  const isSorted = <T, K>(as: T[], orderedFn: (as: T[]) => K) => orderedFn(as)
  console.log(isSorted([1, 5, 2, 3, 2, 4, 5], (arr) => arr.sort((a, b) => a - b)))
}
