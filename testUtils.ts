export const testGo = <T>(arr: T, ...fn: Function[]): Boolean => {
  const bools: boolean[] = []
  const _arr = Object.assign([], arr)

  for (const _fn of fn) {
    const bool = _fn(_arr)
    bools.push(bool)
  }
  return bools.some((bool) => bool === true)
}

export const isMergeToEqual = <T>(a1: T, a2: T): Boolean => {
  if (!Array.isArray(a1) && !Array.isArray(a2)) {
    return a1 == a2
  }

  // 타입추론
  if (Array.isArray(a1) && Array.isArray(a2)) {
    if (a1.length !== a2.length) {
      return false
    }

    for (let i = 0; i < a1.length; i++) {
      if (a1[i] != a2[i]) {
        return false
      }
    }
  }

  return true
}

export const first = <T>(arr: T[]): T => {
  if (!Array.isArray(arr)) return arr
  return arr[0]
}

export const last = <T>(arr: T[]) => {
  if (!Array.isArray(arr)) return arr
  return arr[arr.length - 1]
}
