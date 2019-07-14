export const addProductCart = ({ description, price, image, counter }) => {
    return {
        type: 'ADD',
        description: description,
        price: price,
        image: image,
        count: counter
    }
}