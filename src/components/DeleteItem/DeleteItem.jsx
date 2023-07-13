import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import deleteItem from "./img/deleteItem.svg";

import deleteCartItem from '../../store/actionCreators/deleteCartItem';
import emptySend from '../../utils/emptySend';

function DeleteItem({ id }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const length = cartItems.length - 1;

    function handleClick() {
        dispatch(deleteCartItem(id));
        if (length === 0) {
            emptySend();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={style.delete__item}
        >
            <img src={deleteItem} className={style.delete__icon} alt='delete' />
            <span>Удалить</span>
        </div>
    );
}

export default DeleteItem;