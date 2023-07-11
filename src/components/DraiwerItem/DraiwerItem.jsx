import formatPrice from "../../utils/formatPrice";
import style from "./style.module.scss";

import ControlButton from "../ControlButton/ControlButton";
import DeleteItem from "../DeleteItem/DeleteItem";
import abbreviateString from "../../utils/abbreviateString";

function DraiwerItem({ id, quantity, title, picture, price }) {
    const showDelete = !quantity;
    const itemPrice = formatPrice(price);
    const totalItemPrice = formatPrice(quantity * price);
    const itemTitle = abbreviateString(title, 10);

    return (
        <li className={style.draiwer__item}>
            <article>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img width={52} src={picture} alt="img" />
                    <p title={title} className={style.title}>{itemTitle}</p>
                </div>
                <ControlButton
                    id={id}
                    quantity={quantity}
                />
                {showDelete
                    ? <DeleteItem
                        id={id}
                    />
                    : <div className={style.price}>
                        {quantity > 1 && <p className={style.price__info}>
                            {itemPrice} ₽ за штуку
                        </p>}
                        <p>{totalItemPrice} ₽</p>
                    </div>

                }
            </article>
        </li>
    );
};

export default DraiwerItem;