const initialState = {
    snackbarOptions: {
        snackbarOpen: false,
        snackbarType: 'success',
    },
    isFetching: false,
    products: [],
    orders: [],
    product: {},
    cart: {
        cartItems: []
    }
}

export default initialState