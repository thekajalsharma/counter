//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//ReactDOM.render(<App3 />, document.getElementById('root'));
import React, { Component } from 'react';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
const store = createStore(reducer);


const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

