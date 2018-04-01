import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  };

  incrementCounter = () => {
    const state = { ...this.state };
    state.counter = state.counter + 1;
    this.setState(state);
  }

  decrementCounter = () => {
    const state = { ...this.state };
    state.counter = state.counter - 1;
    this.setState(state);
  }


  render() {
    return (
      <div className="App">
        {<Counter
          state={this.state}
          onIncrement={this.incrementCounter}
          onDecrement={this.decrementCounter} />}
      </div>
    );
  }
}

export default App;
