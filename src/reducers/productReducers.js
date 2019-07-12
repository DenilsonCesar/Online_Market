const INITIAL_STATE = {
    prod01:{
        id: 1,
        description: "Leite liquido, 1L",
        price: 10.50,
        image: require('../images/Leite.jpg')
    },
    prod02:{
        id: 2,
        description: "Nescau em pó, 1kg",
        price: 16.80,
        image: require('../images/nescau.jpg')
    },
    prod03:{
        id: 3,
        description: "Recheador Amori,\nRichester",
        price: 2.80,
        image: require('../images/recheado.jpg')
    },
    prod04:{
        id: 4,
        description: "Biscoido Fortaleza,\nSalgado",
        price: 3.80,
        image: require('../images/fortaleza_biscoito.jpg')
    },
    prod05:{
        id: 5,
        description: "Amaciante, Confort",
        price: 11.80,
        image: require('../images/amaciante.jpg')
    },
    prod06:{
        id: 6,
        description: "Coca-Cola, 2L",
        price: 8.90,
        image: require('../images/coca_cola.jpg')
    },
    prod07:{
        id: 7,
        description: "Detergente, Ypé",
        price: 2.80,
        image: require('../images/detergente.jpg')
    },
    prod08:{
        id: 8,
        description: "Leite Condensado, Italac",
        price: 4.20,
        image: require('../images/leite_condensado.jpg')
    },
    prod09:{
        id: 9,
        description: "Sabão em Pó, OMO",
        price: 5.29,
        image: require('../images/sabao_em_po.jpg')
    },
    prod10:{
        id: 10,
        description: "Skol, 350ML",
        price: 2.89,
        image: require('../images/skol.jpg')
    },
    text: 'esse texto'
}

export default function formProduct(state = INITIAL_STATE, actions){
    switch(actions.type){
        case 'ADD':
            return {...state, description: actions.description, 
                price: actions.price, image: actions.image }
        case 'REMOVE':
            return {...state.filter(item => item.id !== action.id)}
    }
    return state;
}