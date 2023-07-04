import ACTIONS from "../actions";

function setCartItem(id, category, picture, price) {
    return {
        type: ACTIONS.SET_CART_ITEM,
        payload: {
            quantity: 1,
            product: {
                id,
                category,
                picture,
                price
            }
        }
    };
}

export default setCartItem;