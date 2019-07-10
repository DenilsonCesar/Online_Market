/*const INITIAL_STATE = {
    items: [],
    Shipping_value: 0,
}

export default function cart(state = INITIAL_STATE, actions){
    switch(actions.type) {
        case 'ADD':
            return {...state, items: [ ...state.items, {prince: Math.floor(Math.random() * 100) + 1}]};
        case 'SET_SHIPPING':
            return {...state, shipping_value: Math.floor(Math.random() * 100) + 1};
        default:
            return state;
    }
}*/

const INITIAL_STATE = {
    items: [],
    Remover: 0,
    Adicionar: 0
};

export default function cart(state = INITIAL_STATE , actions){
    switch(actions.type) {
        case 'INCREMENT':
            return {...state, items: [ ...state.items, {prince: + 1}]};
        case 'DECREMENT':
            return {...state, items: [ ...state.items, {items: - 1}]};
        default:
            return state;
    }
}