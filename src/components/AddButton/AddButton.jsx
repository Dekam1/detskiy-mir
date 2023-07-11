import { useDispatch } from "react-redux";
import style from "./style.module.scss";

import setCartItem from "../../store/actionCreators/setCartItem";

function AddButton({ id, title, picture, price }) {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setCartItem(id, title, picture, price));
    }

    return (
        <button
            onClick={handleClick}
            className={style.product__button}
        >
            Добавить в корзину
        </button>
    );
};

export default AddButton;