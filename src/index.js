import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';
import { createStore } from 'redux';
import './index.css';

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
const store = createStore(reducer);

ReactDOM.render(<ReduxApp store={store} />, document.getElementById('root'));