import axios from "axios"
import setProduct from "./setProduct";
import setPageQty from "./setPageQty";
import setIsFetching from "./setIsFetching";

export default function getProducts(page) {
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://skillfactory-task.detmir.team/products?page=${page}&limit=20`);
            const { data, meta } = response.data;

            dispatch(setProduct(data));
            dispatch(setPageQty(meta.total));
            dispatch(setIsFetching(false));
        } catch (error) {
            dispatch(setIsFetching(false));
            return alert('При загрузке страницы произошла ошибка:(')
        }
    }
}