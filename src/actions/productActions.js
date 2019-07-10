export const addProduct = (description, prince, image) => {
    return {
        type: 'ADD',
        description,
        prince,
        image
    }
}