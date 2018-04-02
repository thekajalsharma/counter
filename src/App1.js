import React, { Component } from 'react';
import Counter from './Counter';

const reducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

class App1 extends Component {
    state = reducer(undefined, {});

    dispatch(action) {
        this.setState(prevState => reducer(prevState, action));
    }

    incrementCounter = () => {
        this.dispatch({ type: 'INCREMENT' });
    };

    decrementCounter = () => {
        this.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <Counter
                    state={this.state}
                    onIncrement={this.incrementCounter}
                    onDecrement={this.decrementCounter} />
            </div>
        )
    }
}

export default App1;