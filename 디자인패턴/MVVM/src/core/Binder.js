import t from "../utils/lib/type.js";
import BinderItem from "./BinderItem.js";
import ViewModel from "./ViewModel.js";

const Binder = class {
  #items = new Set();
  add(v, _ = t(v, BinderItem)) {
    this.#items.add(v);
  }
  render(viewmodel, _ = t(viewmodel, ViewModel)) {
    this.#items.forEach((item) => {
      const vm = t(viewmodel[item.viewmodel], ViewModel),
        el = item.el;
      Object.entries(vm.styles).forEach(([k, v]) => (el.styles[k] = v));
      Object.entries(vm.attributes).forEach(([k, v]) => el.setAttribute(k, v));
      Object.entries(vm.properties).forEach(([k, v]) => (el[k] = v));
      Object.entries(vm.events).forEach(
        ([k, v]) => (el["on" + k] = (e) => v.call(el, e, viewmodel))
      );
    });
  }
};

export default Binder;
