const INITIAL_STATE = {
    counter: 0,
    total: 0
};

export default function counter(state = INITIAL_STATE , actions){
    switch(actions.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter: state.counter - 1};
        default:
            return state;
    }
}

