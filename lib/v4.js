/**
 *  Event handling and state refresh causing auto re-render.
 */

const createComponent = (info) => {
  const componentId = "comp_" + Math.floor(Math.random() * 10000000);
  let props = {};
  let state = {};

  function createState(stateObj = {}) {
    return new Proxy(stateObj, {
      set: (target, key, value) => {
        target[key] = value;
        renderExternal();
      },
    });
  }

  function renderExternal() {
    let html = info.render.bind({ state, props })();
    let root = document.getElementById(componentId);
    html = `<div id="${componentId}">${html.replaceAll(
      "$$",
      componentId
    )}</div>`;

    if (root) {
      root.innerHTML = html;
    }
    return html;
  }

  // initialize state;
  state = createState(info.state);

  const publicApi = {
    withProps: (newProps) => {
      props = { ...props, ...newProps };
      return publicApi;
    },
    render: renderExternal,
    state,
    ...info.methods,
  };

  return publicApi;
};
