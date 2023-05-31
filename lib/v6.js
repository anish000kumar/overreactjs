import { h } from "snabbdom";
import { computeAttrs } from "./attributes";
import { init, classModule, propsModule, eventListenersModule } from "snabbdom";

export const createComponent = (info) => {
  let props = {};
  let state = {};
  let prevNode = null;
  let currentNode = null;

  function createState(stateObj = {}) {
    state = new Proxy(stateObj, {
      set: (target, key, value) => {
        target[key] = value;
        /** re-render v-dom and patch real dom with changes.*/
        prevNode = currentNode;
        currentNode = renderExternal();
        console.log(prevNode, currentNode);
        patch(prevNode, currentNode);
      },
    });
    return state;
  }

  // init state;
  state = createState(info.state);
  info.onMount && info.onMount();

  const getBoundMethods = () =>
    Object.fromEntries(
      Object.entries(info.methods ?? {}).map(([k, v]) => [
        k,
        v.bind({ state, props }),
      ])
    );

  function renderExternal() {
    return info.render.bind({ state, props, ...getBoundMethods() })();
  }

  const publicApi = {
    withProps: (newProps) => {
      props = { ...props, ...newProps };
      return publicApi;
    },
    state,
    setCurrentNode(node) {
      currentNode = node;
    },
    render: renderExternal,
  };

  return publicApi;
};

/** Make JSX work. */
const renderComponent = (Component, attrs, children) => {
  const component = Component().withProps(attrs);

  const rendered = component.render();
  component.setCurrentNode(rendered);
  return rendered;
};

const renderElement = (tagName, attrs, ...children) => {
  if (typeof tagName === "function") {
    return renderComponent(tagName, attrs, children);
  }
  return h(tagName, computeAttrs(attrs || {}), children);
};

global.h = renderElement;

const patch = init([
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  eventListenersModule, // attaches event listeners
]);

export const render = (RootComponent, rootElement) => {
  patch(rootElement, RootComponent);
};
