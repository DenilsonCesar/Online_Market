export const addProductCart = ({ description, price, image }) => {
    return {
        type: 'ADD',
        description: description,
        price: price,
        image: image
    }
}