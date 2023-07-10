import { useDispatch } from "react-redux";
import style from './style.module.scss';
import fetchSubmit from "../../utils/fetchSubmit";

function SubmitButton() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(fetchSubmit());
    };

    return (
        <button
            onClick={handleClick}
            className={style.submit__button}
        >
            Оформить заказ
        </button>
    );
}

export default SubmitButton;