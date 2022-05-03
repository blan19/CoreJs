1. 애플리케이션 기동시, root 경로에 대한 Node 데이터 불러오기
2. 1을 기반으로 Node 데이터 렌더링
   2-1. Node 데이터를 loop하면서, type이 `DIRECTORY`인 경우 Directory 렌더링
   2-2. Node 데이터를 loop하면서, type이 `FILE`인 경우 File 렌더링
3. 디렉토리를 클릭한 경우, 해당 디렉토리에 속한 Node 데이터를 불러온 뒤
4. 3을 기반으로 Node 데이터 렌더링

```javascript
// 명령형 프로그래밍 방식
// DOM을 직접 접근하는 것에 제한과 규칙이 없으며, 재사용이 용이하지 않음
function renderNodes(nodes) {
  const $container = document.querySelector(".container");
  ....
  ....
  $container.appendChild($nodes);
}
```

명령형 프로그래밍은 잠재적 문제점을 가지고 있는데, 프로젝트가 커질수록 어느 지점에서 어느 시점에 DOM을 업데이트 했는지 추적하기가 점점 힘들어진다

```javascript
class Nodes {
  constructor({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement("ul");
    $app.appendChild(this.$target);

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.state.nodes.map(
      (node) => `<li>${node.name}</li>`
    );
  }
}
```

마치 클래스형 React처럼 컴포넌트 단위로 쪼개 작성한다면 재사용도 용이하고, 업데이트 추적에서 유리합니다
