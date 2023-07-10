import axios from "axios"
import setOneProduct from "../store/actionCreators/setOneProduct";
import setIsFetching from "../store/actionCreators/setIsFetching";

export default function getOneProduct(id) {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const { data } = await axios.get(`https://skillfactory-task.detmir.team/products/${id}`, {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true
            });
            dispatch(setOneProduct(data));
            dispatch(setIsFetching(false));
        } catch (error) {
            dispatch(setIsFetching(false));
            alert('При загрузке страницы возникла ошибка:(');
        }
    }
}