## MVVM (Model View ViewModel)

MVVM에서 핵심은 `ViewModel`과 `Binder`이다

- ViewModel
  View를 대신하는 순수한 데이터 구조체, 순수한 인메모리 객체
- Binder
  ViewModel을 감지하여 View에 반영한다
  Binder가 존재함으로써 ViewModel과 View는 서로 존재를 모르는 상태를 유지할 수 있다

> MVVM에서 핵심은 View와 ViewModel은 서로의 존재를 모르는 상태를 유지하는 것이다
> ViewModel을 잘 설계한다면 테스트와 유지보수가 매우 간단해진다.
