import ACTIONS from "../actions"

export default function setProduct(products) {
    return {
        type: ACTIONS.SET_PRODUCTS,
        products: products
    }
}