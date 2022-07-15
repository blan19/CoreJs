import t from "../utils/lib/type.js";

const BinderItem = class {
  el;
  viewmodel;
  constructor(
    el,
    viewmodel,
    _0 = t(el, HTMLElement),
    _1 = t(viewmodel, "string")
  ) {
    this.el = el;
    this.viewmodel = viewmodel;
    Object.freeze(this);
  }
};

export default BinderItem;
