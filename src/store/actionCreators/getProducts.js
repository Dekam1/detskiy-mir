import axios from "axios"
import setProduct from "./setProduct";
import setPageQty from "./setPageQty";

export default function getProducts(page) {
    return async (dispatch) => {
        const response = await axios.get(`https://skillfactory-task.detmir.team/products?page=${page}&limit=20`);
        const { data, meta } = response.data;
        
        dispatch(setProduct(data));
        dispatch(setPageQty(meta.total));
    }
}