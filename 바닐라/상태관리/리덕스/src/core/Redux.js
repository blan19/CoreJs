import { observable } from "./observer.js";

const createStore = (reducer) => {
  const state = observable(reducer());
  console.log("redux state : ", state);

  const frozenState = {};

  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  const dispatch = (action) => {
    const nextState = reducer(state, action);

    for (const [key, value] of Object.entries(nextState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  const getState = () => {
    console.log(frozenState);
    return frozenState;
  };

  return { getState, dispatch };
};

export default createStore;
