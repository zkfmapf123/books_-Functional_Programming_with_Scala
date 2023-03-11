/**
 * @desc 성공 및 실패여부만 알고 싶을 때
 * @type {Some} 성공을 나타냄
 * @type {None} 실패를 나타냄
 */
export type Option<T> = Some<T> | None

type Some<T> = {
  tag: 'some'
  value: T
}

type None = {
  tag: 'none'
}

export const some = <T>(value: T): Some<T> => ({
  tag: 'some',
  value,
})

export const none = (): None => ({
  tag: 'none',
})

export const isSome = <T>(option: Option<T>): option is Some<T> => option.tag === 'some'
export const isNone = (option: Option<unknown>): option is None => option.tag === 'none'
