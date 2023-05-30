/**
 *  Statefullness.
 */

const createComponent = (info) => {
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
    return info.render(state, props);
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
  };

  return publicApi;
};
