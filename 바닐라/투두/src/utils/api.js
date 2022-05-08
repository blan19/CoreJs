import cash from "./cash.js";

export default {
  get() {},
  post(todo) {
    localStorage.setItem("todos", JSON.stringify(todo));
  },
  update(id) {},
  delete(id) {},
};
