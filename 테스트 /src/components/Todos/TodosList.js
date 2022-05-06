export default class TodosList {
  constructor({ $app, initialState, onUpdate, onRemove }) {
    this.$target = document.createElement("ul");
    this.$target.className = "Todos-List";
    this.state = initialState;

    $app.appendChild(this.$target);

    // * event
    this.onUpdate = onUpdate;
    this.onRemove = onRemove;

    // * render
    this.render();
    this.init();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const template = this.state.length
      ? this.state
          .map(
            (todo) =>
              `<li class="Todo" data-todo-id="${
                todo.id
              }"><div><input data-action="onUpdate" type="checkbox" ${
                todo.done ? "checked" : ""
              } /><span style="${
                todo.done ? "text-decoration: line-through" : ""
              }">${
                todo.todo
              }</span></div><button data-action="onRemove" type="button">Remove</button></li>`
          )
          .join("")
      : "";

    this.$target.innerHTML = template;
    // * event
  }

  init() {
    this.$target.addEventListener("click", (e) => {
      const $li = e.target.closest(".Todo");
      const { todoId } = $li.dataset;
      const id = Number(todoId);
      const action = e.target.dataset.action;
      if (action) {
        this[action](id);
      }
    });
  }
}
