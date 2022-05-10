import { observable } from "./observer.js";

const store = {
  state: observable({ count: 0 }),

  setState(nextState) {
    for (const [key, value] of Object.entries(nextState)) {
      if (!this.state[key]) continue;
      this.state[key] = value;
    }
  },
};

export default store;
