/**
 *  Modularity, reusablity using components.
 */

const createComponent = (info) => {
  let props = {};

  function renderExternal() {
    return info.render(props);
  }

  const publicApi = {
    withProps: (newProps) => {
      props = { ...props, ...newProps };
      return publicApi;
    },
    render: renderExternal,
  };

  return publicApi;
};
