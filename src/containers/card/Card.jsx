import style from "./style.module.scss";
import { Rating } from '@mui/material';

export default function Card({ picture, title, rating, price }) {
    return (
        <li className={style.card}>
            <article>
                <img src={picture} className={style.card__img} width={250} height={250} alt={title} />
                <div className={style.card__bottom}>
                    <p className={style.card__name}>{title}</p>
                    <Rating name="read-only" value={rating} precision={0.1} readOnly size="small" />
                    <p className={style.card__price}>
                        <b>{price} ₽</b>
                    </p>
                </div>
            </article>
        </li>
    )
}