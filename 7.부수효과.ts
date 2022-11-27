import { go, transposition } from './utils'

{
  /**
   * 예측이 불가능 하다
   */
  const getRanNum = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  //   console.log(getRanNum()) // rand
  //   console.log(getRanNum()) // rand
  //   console.log(getRanNum()) // rand
  //   console.log(getRanNum()) // rand
  //   console.log(getRanNum()) // rand
  //   console.log(getRanNum()) // rand
}

{
  /**
   * 테스트 및 추적 및 예상이 가능하다. -> 순수함수
   */
  class SimpleRNG {
    constructor(private readonly seed: number) {}

    nextInt() {
      const newSeed = (this.seed * 10 + 100) & 10
      return Math.floor(newSeed >> 2)
    }
  }

  const simpleRng = new SimpleRNG(42)
  //   console.log(simpleRng.nextInt()) // 값이 항상 동일
  //   console.log(simpleRng.nextInt()) // 값이 항상 동일
  //   console.log(simpleRng.nextInt()) // 값이 항상 동일
  //   console.log(simpleRng.nextInt()) // 값이 항상 동일
}

{
  /**
   * 상태전이 + 상태확장
   */

  type Rand<T extends number, K> = [T, K]
  type T = Rand<number, BetterRNG>

  class BetterRNG {
    constructor(private readonly seed: number) {}

    nextInt(): T {
      const newSeed = (this.seed * 10 + 100) & 10
      return [Math.floor(newSeed >> 2), this]
    }

    noneNegativeInt(rand: T): T {
      const [seed] = rand

      if (seed < 0) return [-100, this]
      return [seed + 10, this]
    }

    ifElse(rand: T, overNum: number, t: number, f: number): T {
      const [seed] = rand
      if (seed > overNum) {
        return [t, this]
      }

      return [f, this]
    }
  }

  const rng = new BetterRNG(100)

  const [r1, r1RNG] = rng.nextInt()
  const [r2, r2RNG] = rng.nextInt()
  const [r3, r3RNG] = rng.nextInt()
  console.log(r1, r2, r3)

  // 이런 방식으로 인해서 -> 함수 합성이 가능하다
  const val1 = go(rng.nextInt(), (rand: any) => rng.noneNegativeInt(rand))
  const val2 = go(rng.nextInt(), (rand: any) => rng.noneNegativeInt(rand))
  const val3 = go(
    rng.nextInt(),
    (rand) => rng.noneNegativeInt(rand),
    (rand) => rng.ifElse(rand, 10, 100, -100)
  )
  console.log(val1, val2, val3)

  // 이항함수
  const ra = new BetterRNG(20)
  const rb = new BetterRNG(17)

  const transpositionNum = transposition(ra.nextInt(), rb.nextInt(), ([raNum], [rbNum]) => raNum + rbNum)
  console.log(transpositionNum)
}
