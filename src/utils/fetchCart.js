import axios from "axios";

import setServerCart from "../store/actionCreators/setServerCart";

function fetchCart() {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://skillfactory-task.detmir.team/cart', {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true
            });
            if (data.length) {
                dispatch(setServerCart(data));
            }
        } catch (error) {
            alert('При выполнении запроса произошла ошибка:(');
        }
    }
}

export default fetchCart;