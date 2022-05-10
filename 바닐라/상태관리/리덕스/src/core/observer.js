let currentObserver = null;

const observe = (f) => {
  currentObserver = f;
  f();
  currentObserver = null;
};

const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set(nextState) {
        _value = nextState;
        observers.forEach((f) => {
          console.log("render");
          f();
        });
      },
    });
  });
  return obj;
};

export { observable, observe };
