const createComponent = (info) => {
  let componentId = "comp_" + Math.floor(Math.random() * 10000000);
  let childIndex = 0;
  const children = [];
  let props = {};
  let state = {};

  function h(Component, props) {
    if (!children[childIndex]) {
      children[childIndex] = Component();
    }
    const res = children[childIndex].withProps(props).render();
    childIndex++;
    return res;
  }

  function renderExternal() {
    childIndex = 0;
    let html = info.render.bind({ state, props, h })();
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

  function createState(stateObj = {}) {
    state = new Proxy(stateObj, {
      set: (target, key, value) => {
        target[key] = value;
        renderExternal();
      },
    });
    return state;
  }

  // init state;
  state = createState(info.state);
  info.onMount && info.onMount();

  const publicApi = {
    withProps: (newProps) => {
      props = { ...props, ...newProps };
      return publicApi;
    },
    ...info.methods,
    state,
    render: renderExternal,
  };

  window[componentId] = publicApi;

  return publicApi;
};
