import ACTIONS from "../actions";

function setCartItem(id, title, picture, price) {
    return {
        type: ACTIONS.SET_CART_ITEM,
        payload: {
            quantity: 1,
            product: {
                id,
                title,
                picture,
                price
            }
        }
    };
}

export default setCartItem;