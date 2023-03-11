/**
 * Use Option
 */
import { isSome, none, Option, some } from '../type/options'

export function optionMap<T>(list: T[], fn: (l: T) => T): Option<T[]> {
  return list?.length === 0 ? none() : some(list.map(fn))
}

export function getOrElse<T>(target: T[], list: T[]): Option<T[]> {
  const v = target?.filter((item) => list.includes(item))
  return v?.length === 0 ? none() : some(v)
}

export function optionCasting<T>(v: T): Option<T> {
  if (!v) return none()
  return some(v)
}

export function mapToList<T>(a: Option<T[]>, b: Option<T[]>, fn: (a: T, b: T) => T): Option<T[]> {
  if (isSome(a) && isSome(b)) {
    const [aList, bList] = [a.value, b.value]
    return some(aList.map((item, index) => fn(item, bList[index])))
  }

  return none()
}

export function concatList<T>(a: Option<T[]>[]): Option<T[]> {
  let value: T[] = []
  for (const _a of a) {
    if (isSome(_a)) {
      value = [...value, ..._a.value]
    }
  }

  if (value?.length === 0) return none()
  return some(value)
}
