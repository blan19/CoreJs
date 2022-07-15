import t from "../utils/lib/type.js";
import Binder from "./Binder.js";
import BinderItem from "./BinderItem.js";

const Scanner = class {
  scan(el, _ = t(el, HTMLElement)) {
    const binder = new Binder();
    this.checkItem(binder, el);
    const stack = [el.firstElementChild];
    let target;
    while ((target = stack.pop())) {
      this.checkItem(binder, target);
      if (target.firstElementChild) stack.push(target.firstElementChild);
      if (target.nextElementSibling) stack.push(target.nextElementSibling);
    }
    return binder;
  }

  checkItem(binder, el) {
    const vm = el.getAttributes("data-viewmodel");
    if (vm) binder.add(new BinderItem(el, vm));
  }
};

export default Scanner;
