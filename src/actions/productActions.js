export const addProduct = (description, price, image) => {
    return {
        type: 'ADD',
        description: description,
        price: price,
        image: image
    }
}