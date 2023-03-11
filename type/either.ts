/**
 * @desc 성공 및 실패의 대한 value가 존재
 * @type {Left} 실패 => 에러이유 존재
 * @type {Right} 성공 => 값 존재
 */

export type Either<L, R> = Left<L> | Right<R>
export type Left<L> = {
  tag: 'left'
  value: L
}
export type Right<R> = {
  tag: 'right'
  value: R
}

export const left = <L>(value: L): Left<L> => ({ tag: 'left', value })
export const right = <R>(value: R): Right<R> => ({ tag: 'right', value })

export const isLeft = <L>(either: Left<L>): either is Left<L> => either.tag === 'left'
export const isRight = <R>(either: Right<R>): either is Right<R> => either.tag === 'right'
