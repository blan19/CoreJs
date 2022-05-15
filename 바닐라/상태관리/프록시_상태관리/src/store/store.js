import PubSub from "../core/PubSub.js";

export default class Store {
  constructor(params) {
    let $self = this;

    $self.actions = {};
    $self.mutations = {};
    $self.state = {};
    $self.status = "resting";
    $self.events = new PubSub();

    if (params.hasOwnProperty("actions")) {
      $self.actions = params.actions;
    }

    if (params.hasOwnProperty("mutations")) {
      $self.mutations = params.mutations;
    }

    $self.state = new Proxy(params.state || {}, {
      set: function (state, key, value) {
        state[key] = value;

        $self.events.publish("stateChange", $self.state);

        $self.status = "resting";

        return true;
      },
    });
  }
}
