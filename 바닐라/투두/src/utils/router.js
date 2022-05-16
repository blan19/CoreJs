const ON_ROUTE_CHANGE = "ON_ROUTE_CHANGE";

const routerInit = (callback) => {
  window.addEventListener(ON_ROUTE_CHANGE, () => {
    callback();
  });
};

const router = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ON_ROUTE_CHANGE, params));
};

export { routerInit, router };
