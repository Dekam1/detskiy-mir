import ControlButton from "../ControlButton/ControlButton";
import style from "./style.module.scss";

function DraiwerItem() {
    return (
        <li className={style.draiwer__item}>
            <article>
                <div>
                    <img width={52} src="./img/Photo.png" alt="img" />
                    <p className={style.title}>Куртка Lassie</p>
                </div>
                <ControlButton />
                <p className={style.price}>6 199 ₽</p>
            </article>
        </li>
    );
};

export default DraiwerItem;