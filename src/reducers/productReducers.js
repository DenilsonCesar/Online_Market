const INITIAL_STATE = {
    prod01:{
        description: "Leite liquido, 1L",
        prince: "10,50",
        image: require('../images/Leite.jpg')
    },
    prod02:{
        description: "Nescau em pó, 1kg",
        prince: "16,80",
        image: require('../images/nescau.jpg')
    },
    prod03:{
        description: "Recheador Amori,\nRichester",
        prince: "2,80",
        image: require('../images/recheado.jpg')
    },
    prod04:{
        description: "Biscoido Fortaleza,\nSalgado",
        prince: "R$ 3,80",
        image: require('../images/fortaleza_biscoito.jpg')
    },
    prod05:{
        description: "Amaciante, Confort",
        prince: "11,80",
        image: require('../images/amaciante.jpg')
    },
    prod06:{
        description: "Coca-Cola, 2L",
        prince: "8,90",
        image: require('../images/coca_cola.jpg')
    },
    prod07:{
        description: "Detergente, Ypé",
        prince: "2,80",
        image: require('../images/detergente.jpg')
    },
    prod08:{
        description: "Leite Condensado, Italac",
        prince: "4,20",
        image: require('../images/leite_condensado.jpg')
    },
    prod09:{
        description: "Sabão em Pó, OMO",
        prince: "5,29",
        image: require('../images/sabao_em_po.jpg')
    },
    prod10:{
        description: "Skol, 350ML",
        prince: "2,89",
        image: require('../images/skol.jpg')
    },
}


export default function formProduct(state = INITIAL_STATE, actions){
    return state;
}