import React from 'react';
import Counter from './Counter';

class ReduxApp extends React.Component {

    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.props;
        console.log(store.getState());
        return (
            <Counter
                state={store.getState()}
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
            />
        );
    }
}
export default ReduxApp;