import formatPrice from "../../utils/formatPrice";
import style from "./style.module.scss";

import ControlButton from "../ControlButton/ControlButton";
import DeleteItem from "../DeleteItem/DeleteItem";

function DraiwerItem({ id, quantity, category, picture, price }) {
    const showDelete = quantity ? false : true;

    return (
        <li className={style.draiwer__item}>
            <article>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img width={52} src={picture} alt="img" />
                    <p className={style.title}>{category}</p>
                </div>
                <ControlButton
                    id={id}
                    quantity={quantity}
                />
                {showDelete
                    ? <DeleteItem
                        id={id}
                    />
                    : <p className={style.price}>{formatPrice(quantity * price)} ₽</p>
                }
            </article>
        </li>
    );
};

export default DraiwerItem;