import axios from "axios";
import setIsFetching from "../store/actionCreators/setIsFetching";
import setOrders from "../store/actionCreators/setOrders";

function getOrders(page, func) {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://skillfactory-task.detmir.team/orders?page=${page}&limit=8`, {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true
            });
            const { data, meta } = await response.data;
            const { total } = meta;

            func(Math.ceil(total / 8));

            dispatch(setOrders(data));
            dispatch(setIsFetching(false));
        } catch (error) {
            dispatch(setIsFetching(false));
            return alert('При загрузке страницы произошла ошибка:(')
        }
    };
}

export default getOrders;