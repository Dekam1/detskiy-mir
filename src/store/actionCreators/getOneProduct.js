import axios from "axios"
import setOneProduct from "./setOneProduct";
import setIsFetching from "./setIsFetching";

export default function getOneProduct(id) {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const { data } = await axios.get(`https://skillfactory-task.detmir.team/products/${id}`);
            dispatch(setOneProduct(data));
            dispatch(setIsFetching(false));
        } catch (error) {
            dispatch(setIsFetching(false));
            alert('При загрузке страницы возникла ошибка:(');
        }
    }
}