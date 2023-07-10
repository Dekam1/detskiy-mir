import axios from "axios"
import setProduct from "../store/actionCreators/setProduct";
import setIsFetching from "../store/actionCreators/setIsFetching";

export default function getProducts(page, func) {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://skillfactory-task.detmir.team/products?page=${page}&limit=20`, {
                headers: {
                    Accept: 'application/json'
                },
                withCredentials: true
            });
            const { data, meta } = await response.data;
            const { total, count } = meta;
           
            func(total / count);
            dispatch(setProduct(data));
            dispatch(setIsFetching(false));
        } catch (error) {
            dispatch(setIsFetching(false));
            return alert('При загрузке страницы произошла ошибка:(')
        }
    }
}