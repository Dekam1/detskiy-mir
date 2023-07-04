import axios from "axios";

import setServerCart from "./setServerCart";

function getCart() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://skillfactory-task.detmir.team/cart');
            if (data.length) {
                dispatch(setServerCart(data));
            }
        } catch (error) {
            alert('При выполнении запроса произошла ошибка:(');
        }
    }
}

export default getCart;