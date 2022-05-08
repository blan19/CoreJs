import TodosForm from "./components/Todos/TodosForm.js";
import TodosList from "./components/Todos/TodosList.js";
import api from "./utils/api.js";

export default class App {
  constructor({ $app }) {
    // * App
    this.$app = $app;
    this.state = {
      todos: [],
      input: "",
    };

    // * components
    this.todosForm = new TodosForm({
      $app: this.$app,
      initialState: {
        input: this.state.input,
        lastId: this.state.todos.length
          ? this.state.todos[this.state.todos.length - 1].id
          : 0,
      },
      onChange: (input) => {
        this.setState({ ...this.state, input });
      },
      onClick: (todo) => {
        const todos = this.state.todos.concat(todo);
        api.post(todos);
        this.setState({
          ...this.state,
          todos,
          input: "",
        });
      },
    });

    this.todosList = new TodosList({
      $app: this.$app,
      initialState: this.state.todos,
      onUpdate: (id) => {
        const updatedTodos = this.state.todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        this.setState({ ...this.state, todos: updatedTodos });
      },
      onRemove: (id) => {
        const removedTodos = this.state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(removedTodos));
        this.setState({ ...this.state, todos: removedTodos });
      },
    });

    // * init
    this.init();
  }

  setState(nextState) {
    this.state = nextState;
    this.todosForm.setState({
      ...this.todosForm.state,
      input: this.state.input,
      lastId: this.state.todos.length
        ? this.state.todos[this.state.todos.length - 1].id
        : 0,
    });
    this.todosList.setState(this.state.todos);
  }

  init() {
    const initialState = JSON.parse(localStorage.getItem("todos"));
    this.setState({ ...this.state, todos: initialState ? initialState : [] });
  }
}
