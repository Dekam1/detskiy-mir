import React from "react";

import style from "./style.module.scss";

function Draiwer() {
    const [showDraiwerMenu, setShowDraiwerMenu] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setShowDraiwerMenu(true)}
            onMouseLeave={() => setShowDraiwerMenu(false)}
            className={style.draiwer}
        >
            <span className={style.draiwer__icon}>
                Корзина (0)
            </span>
            {showDraiwerMenu &&
                <div className={style.draiwer_menu}>
                    <div className={style.box__shadow}>
                        <ul className={style.draiwer__list}>
                            <li className={style.draiwer__item}>
                                <article>
                                    <div>
                                        <img width={52} src="./img/Photo.png" alt="img" />
                                        <p className={style.item__title}>Куртка Lassie</p>
                                    </div>
                                    <div className={style.draiwer__buttons}>
                                        <button />
                                        <span>1</span>
                                        <button />
                                    </div>
                                    <p className={style.draiwer__item__price}>6 199 ₽</p>
                                </article>
                            </li>
                            <li className={style.draiwer__item}>
                                <article>
                                    <div>
                                        <img width={52} src="./img/Photo.png" alt="img" />
                                        <p className={style.item__title}>Куртка Lassie</p>
                                    </div>
                                    <div className={style.draiwer__buttons}>
                                        <button />
                                        <span>1</span>
                                        <button />
                                    </div>
                                    <p className={style.draiwer__item__price}>6 199 ₽</p>
                                </article>
                            </li>
                        </ul>
                        <div className={style.menu__bottom}>
                            <div className={style.span__wrapper}>
                                <span>Итого</span>
                                <span>14 597 ₽</span>
                            </div>
                            <button className={style.menu__bottom__button}>
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Draiwer;