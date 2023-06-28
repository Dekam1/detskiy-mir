import React from "react";

import style from "./style.module.scss";
import DraiwerItem from "../DraiwerItem/DraiwerItem";

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
                            <DraiwerItem />
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