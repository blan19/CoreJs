## 옵저버 패턴

옵저버 패턴(observer pattern)은 객체의 state 변화를 관찰하는 관찰자들, 즉 옵저버들의 목록을 객체에 등록하여 state 변화가 있을 때마다 메서드 등을 통해 객체가 직접 목록의 각 옵저버에게 통지하도록 하는 디자인 패턴입니다. 주로 분산 이벤트 핸들링 시스템을 구현하는 데 사용됩니다. 발행/subscribe 모델로 알려져 있기도 합니다.

> 어떤 객체의 상테가 변할 때 그와 연관된 객체들에 변했다는 정보를 보내는 디자인 패턴이다

```javascript
class Store {
  $state;
  $observer = new Set();

  constructor(state) {
    this.$state = state;
    Object.keys(state).forEach((key) =>
      Object.defineProperty(this, key, { get: () => this.$state[key] })
    );
  }
  update(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.notify();
  }

  subscribe(subscriber) {
    this.$observers.add(subscriber);
  }

  notify() {
    this.$observers.forEach((fn) => fn);
  }
}

class Subscriber {
  #fn;

  constructor(fn) {
    this.#fn = fn;
  }

  subscribe(publisher) {
    publisher.구독자_등록(this.#fn);
  }
}

const state = new Store({
  a: 10,
  b: 20,
});

const plus = new Subscriber(() => console.log(`a + b = ${state.a + state.b}`));
const multi = new Subscriber(() => console.log(`a * b = ${state.a * state.b}`));

plus.subscribe(state);
multi.subscribe(state);

state.notify();
// a + b = 30
// a * b = 200

state.update({ a: 100, b: 200 });
// a + b = 300
// a * b = 20000
```
