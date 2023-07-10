import ACTIONS from "../actions";

function setOrders(data) {
    return {
        type: ACTIONS.SET_ORDERS,
        orders: data
    };
}

export default setOrders;