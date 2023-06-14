import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import style from "./style.module.scss";

import abbreviateString from "../../utils/abbreviateString";
import formatPrice from "../../utils/formatPrice";


export default function Card({ id, picture, title, rating, price }) {
    return (
        <li className={style.card}>
            <Link className={style.card__link} to={`/product/${id}`}>
                <article>
                    <img src={picture} className={style.card__img} width={250} height={250} alt={title} />
                    <div className={style.card__bottom}>
                        <p title={title} className={style.card__name}>{abbreviateString(title)}</p>
                        <Rating
                            name="read-only"
                            size="small"
                            readOnly
                            value={rating}
                            precision={0.1}
                        />
                        <p className={style.card__price}>
                            <b>{formatPrice(price)} ₽</b>
                        </p>
                    </div>
                </article>
            </Link>
        </li>
    )
}