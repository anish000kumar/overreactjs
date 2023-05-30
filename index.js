const Counter = () =>
  createComponent({
    state: {
      name: "anish",
      count: 0,
    },

    methods: {
      increase() {
        this.state.count++;
      },
      decrease() {
        this.state.count--;
      },
    },

    render(state, props) {
      return `
            <h3> ${state.count} </h3>
            ${props.name}
            <button onClick="$$.increase()" > increase </button>
            <button onClick="$$.decrease()" > decrease </button>
        `;
    },
  });

const App = createComponent({
  rootId: "app",

  state: {
    topCount: 0,
  },

  methods: {
    setToRandom() {
      this.state.topCount = Math.random();
    },
  },

  render(state, props) {
    return `
        <h1> ${state.topCount} </h1>
        <button onClick="$$.setToRandom()"> set to random </button>
        <hr />


        <div> counter 1:  ${Counter().withProps({ name: "Action 1" }).render()} 
        <hr/>


        
        counter 2: ${Counter().withProps({ name: "Action 2" }).render()}</div>`;
  },
});

const html = App.withProps({ name: "Okay" }).render();
