import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

import DraiwerItem from "../DraiwerItem/DraiwerItem";
import formatPrice from "../../utils/formatPrice";

import SubmitButton from "../SubmitButton/SubmitButton";

function Draiwer() {
    const [showDraiwerMenu, setShowDraiwerMenu] = React.useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalSum = cartItems.reduce((acc, item) => {
        const { quantity, product } = item;
        const { price } = product;
        return acc + (quantity * price);
    }, 0);

    return (
        <div
            onMouseEnter={() => setShowDraiwerMenu(true)}
            onMouseLeave={() => setShowDraiwerMenu(false)}
            className={style.draiwer}
        >
            <span className={style.draiwer__icon}>
                Корзина ({cartItems.length})
            </span>
            {showDraiwerMenu && cartItems.length
                ? <div className={style.draiwer_menu}>
                    <div className={style.box__shadow}>
                        <ul className={style.draiwer__list}>
                            {cartItems.map(item => (
                                <DraiwerItem
                                    key={item.product.id}
                                    id={item.product.id}
                                    quantity={item.quantity}
                                    category={item.product.category}
                                    picture={item.product.picture}
                                    price={item.product.price}
                                />
                            ))}
                        </ul>
                        <div className={style.menu__bottom}>
                            <div className={style.span__wrapper}>
                                <span>Итого</span>
                                <span>{formatPrice(totalSum) || 0} ₽</span>
                            </div>
                            <SubmitButton />
                        </div>
                    </div>
                </div>
                : null}
        </div >
    );
}

export default Draiwer;