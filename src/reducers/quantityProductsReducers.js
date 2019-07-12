const INITIAL_STATE = {
    counter: 1,
};

export default function counter(state = INITIAL_STATE , actions){
    if(state.counter  < 0){
        state.counter = 0
    }
    switch(actions.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter: state.counter - 1};
        default:
            return state;
    }
    
}
