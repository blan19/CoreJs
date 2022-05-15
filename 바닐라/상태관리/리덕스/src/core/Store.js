import { observable } from "../utils/observable.js";

const createStore = (reducer) => {
  const state = observable(reducer());

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

  const getState = () => frozenState;

  return { getState, dispatch };
};

export default createStore;
