export default class TodosForm {
  constructor({ $app, initialState, onChange, onClick }) {
    this.$target = document.createElement("form");
    this.$target.className = "Todos-Form";
    this.state = initialState;

    this.$header = document.createElement("h1");
    this.$header.innerText = "새 To-do 추가";

    this.$input = document.createElement("input");
    this.$input.placeholder = "To-do 입력하기";
    this.$input.value = this.state.input;

    this.$button = document.createElement("button");
    this.$button.type = "submit";
    this.$button.innerText = "추가하기";

    this.$target.appendChild(this.$header);
    this.$target.appendChild(this.$input);
    this.$target.appendChild(this.$button);
    $app.appendChild(this.$target);

    // * render
    this.init();
    this.render();

    // * event
    this.onChange = onChange;
    this.onClick = onClick;
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    // * input value
    this.$input.value = this.state.input;
  }

  init() {
    // * onChange
    this.$target.querySelector("input").addEventListener("change", (e) => {
      e.stopPropagation();
      this.onChange(e.target.value);
    });

    // * onClick
    this.$target.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const nextId = this.state.lastId + 1;
      const todo = {
        id: nextId,
        todo: this.state.input,
        done: false,
      };
      this.onClick(todo);
    });
  }
}
