import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import deleteCartItem from '../../store/actionCreators/deleteCartItem';
import axios from 'axios';

function DeleteItem({ id }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    function handleClick() {
        dispatch(deleteCartItem(id));
        if (cartItems.length - 1 === 0) {
            axios.post('https://skillfactory-task.detmir.team/cart/update', {
                data: []
            })
        }
    };

    return (
        <div
            onClick={handleClick}
            className={style.delete__item}
        >
            <img src='/img/deleteItem.svg' className={style.delete__icon} alt='delete' />
            <span>Удалить</span>
        </div>
    );
}

export default DeleteItem;