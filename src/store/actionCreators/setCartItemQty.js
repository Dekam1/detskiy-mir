import ACTIONS from "../actions";

function setCartItemQty(option, id) {
    return {
        type: ACTIONS.SET_CART_ITEM_QTY,
        payload: {
            type: option,
            id
        }
    };
}

export default setCartItemQty;