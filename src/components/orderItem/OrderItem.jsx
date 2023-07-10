import HtmlComponent from "../../components/HtmlComponent";
import style from './style.module.scss';

import createRequestNumber from "../../utils/createRequestNumber";
import formatPrice from "../../utils/formatPrice";
import createDateOrder from "../../utils/createDateOrder";
import formatDate from "../../utils/formatDate";

function OrderItem({ order }) {
    const { date, totalPrice, html } = createDateOrder(order);


    return (
        <li className={style.order__item}>
            <article>
                <div className={style.order}>
                    <span>Заказ</span>
                    <p>{createRequestNumber()}</p>
                </div>
                <div className={style.order__imgs}>
                    <HtmlComponent html={html} />
                </div>
                <div className={style.order__info}>
                    <p><span>Оформлено</span>{formatDate(date)}</p>
                    <p><span className={style.span__padding}>На сумму</span>{formatPrice(totalPrice)} ₽</p>
                </div>
            </article>
        </li>
    );
}

export default OrderItem;