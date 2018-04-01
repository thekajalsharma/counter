import React from 'react';

const Counter = ({ state, onIncrement, onDecrement }) => {
    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}
export default Counter;