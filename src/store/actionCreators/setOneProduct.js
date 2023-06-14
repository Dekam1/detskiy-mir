import ACTIONS from "../actions";

export default function setOneProduct(product) {
    return {
        type: ACTIONS.SET_ONE_PRODUCT,
        payload: product
    }
}