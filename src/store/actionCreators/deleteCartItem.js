import ACTIONS from "../actions";

function deleteCartItem(id) {
    return {
        type: ACTIONS.DELETE_CART_ITEM,
        payload: id
    };
}

export default deleteCartItem;