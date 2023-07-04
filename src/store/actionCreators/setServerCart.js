import ACTIONS from "../actions";

function setServerCart(data) {
    return {
        type: ACTIONS.SET_SERVER_CART,
        payload: data
    };
}

export default setServerCart;