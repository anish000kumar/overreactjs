const createComponent = (info) => {
  const componentId = "comp_" + Math.floor(Math.random() * 10000000);
  let props = {};
  let state = {};

  function renderExternal() {
    let html = info.render(state, props, componentId);
    html = html.replaceAll("$$", componentId);

    debugger;

    if (info.rootId) {
      const root = document.getElementById(info.rootId);
      root.innerHTML = html;
    } else {
      let root = document.getElementById(componentId);
      if (root) {
        root.innerHTML = html;
      }
      html = `<div id="${componentId}">${html}</div>`;
    }
    return html;
  }

  function createState(stateObj = {}) {
    state = new Proxy(stateObj, {
      get: (target, key) => {
        return target[key];
      },
      set: (target, key, value) => {
        target[key] = value;
        renderExternal();
      },
    });
    return state;
  }

  // init state;
  state = createState(info.state);

  // make event listeners work.
  window[componentId] = {
    ...info.methods,
    state,
  };

  return {
    withProps: (newProps) => {
      props = { ...props, ...newProps };
      return {
        render: renderExternal,
      };
    },
    state,
    render: renderExternal,
  };
};

function template(strings, ...expressions) {
  return strings.join("");
}
