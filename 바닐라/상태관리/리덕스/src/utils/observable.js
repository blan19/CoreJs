let currentObserver = null;

const observe = (f) => {
  currentObserver = f;
  f();
  currentObserver = null;
};

const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, name) {
      observerMap[name] = observerMap[name] || new Set();
      if (currentObserver) observerMap.add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      if (target[name] === value) return true;
      if (JSON.stringify(target[name] === JSON.stringify(value))) return true;
      target[name] = value;
      observable[name].forEach((f) => f());
      return true;
    },
  });
};

export { observe, observable };
