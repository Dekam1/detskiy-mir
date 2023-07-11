import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import style from "./style.module.scss";

import abbreviateString from "../../utils/abbreviateString";
import formatPrice from "../../utils/formatPrice";

function Card({ id, picture, title, rating, price }) {
    const cardPrice = formatPrice(price);
    const cardTitle = abbreviateString(title, 40);

    return (
        <li className={style.card}>
            <Link className={style.card__link} to={`/product/${id}`}>
                <article>
                    <img src={picture} className={style.card__img} width={250} height={250} alt={title} />
                    <div className={style.card__bottom}>
                        <p title={title} className={style.card__name}>{cardTitle}</p>
                        <Rating
                            name="read-only"
                            size="small"
                            readOnly
                            value={rating}
                            precision={0.1}
                        />
                        <p className={style.card__price}>
                            <b>{cardPrice} ₽</b>
                        </p>
                    </div>
                </article>
            </Link>
        </li>
    )
}

export default Card;