const cartItems = (state = [], actions) => {
    switch(actions.type){
        case 'ADD_TO_CART':
            return [...state, actions.payload]
        case 'REMOVE_FROM_CART':
            return [...state.filter(cartItems => cartItems.description 
                !== actions.payload.description)]
    }
    return state;
}

export default cartItems;