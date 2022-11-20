# 스칼라로 배우는 함수형 프로그래밍 (use Typescript)

## Desc

- 스칼라로 배우는 함수형프로그래밍 책을 읽으며 Typescript로 작성을 해보자..

## Keyword

- 부수효과
  - 값을 반환하는 메서드나 함수가 외부상태를 변경하는 경우를 부수효과라 한다
  - 결과적으로 부수효과가 생기게 되면 -> 추론이 어려워진다 -> 테스트하기가 어렵다.
- 순수함수

  ```scala

      val x = new StringBuilder("Hello")
      val y = x.append(", World")

      var s1 = y.toString
      var s2 = y.toString
      // s1 == s2

      val x = new StringBuilder("Hello")

      val s1 = x.append(", World")     // Hello, World
      val s2 = x.append(", World")     // Hello, World, World
      // StringBuilder는 순수함수가 아님
  ```

## Ref

- 알라딘에서 14,000원 주고 삼...
