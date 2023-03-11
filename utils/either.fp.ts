import { Either, left, right } from '../type/either'

export const eitherMeans = <R>(list: R[]): Either<string, R[]> => {
  if (list.length === 0) return left('not exist list')
  return right(list)
}

export const eitherSaveCalc = <R>(x: R, y: R, calcFn: (x: R, y: R) => R): Either<unknown, R> => {
  try {
    return right(calcFn(x, y))
  } catch (e) {
    return left(e)
  }
}
