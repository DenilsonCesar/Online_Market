export const addProduct = (description, price, image) => {
    return {
        type: 'ADD',
        description,
        price,
        image
    }
}