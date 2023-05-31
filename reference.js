import { Component, render } from "./temp";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        count: {this.state.count}
        <button onClick={() => this.setState({ count: ++this.state.count })}>
          increase
        </button>
        <button onClick={() => this.setState({ count: --this.state.count })}>
          decrease
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Hi <Counter></Counter>
        </div>
        <div>
          Hi2 <Counter></Counter>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
