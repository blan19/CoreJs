const ROUTE_CHANGE_EVENT = "ROUTING";

const routerInit = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

const router = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};

export { routerInit, router };
