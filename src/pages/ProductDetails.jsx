import { Rating } from "@mui/material";
import Header from "../containers/header/Header";

export default function ProductDetails() {
    return (
        <>
            <Header />
            <div className="product__wrapper">
                <div className="product">
                    <div className="product__main">
                        <div className="product__left">
                            <img src="../img/Photo.png" alt="product img" />
                        </div>
                        <div className="product__right">
                            <h3 className="product__title">
                                Куртка Lassie
                            </h3>
                            <Rating
                                name="read-only"
                                size="small"
                                readOnly
                                precision={0.1}
                            />
                            <p className="product__price">
                                6 199 ₽
                            </p>
                            <button className="product__button">
                                Добавить в корзину
                            </button>
                            <div className="product__conditions">
                                <div className="product__conditions__text">
                                    <p>Условия возврата</p>
                                    <p>Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.</p>
                                    <p><span>Цены в интернет-магазине могут отличаться от розничных магазинов.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__details">
                    <h3 className="details__title">Описание</h3>
                    <p className="details__text">Детская зимняя куртка Reimatec® изготовлена из износостойкого, водо- и ветронепроницаемого, дышащего материала с грязеотталкивающей поверхностью. Швы в детской куртке проклеены и водонепроницаемы, поэтому неожиданный снегопад или дождь не помешает веселым играм на свежем воздухе! Эту удобную куртку с подкладкой из гладкого полиэстера легко надевать и удобно носить. Благодаря регулируемой талии и подолу куртка прямого кроя отлично сидит по фигуре. Капюшон снабжен кнопками. Это обеспечивает дополнительную безопасность во время активных прогулок – капюшон легко отстегивается, если случайно за что-нибудь зацепится. Практичная отделка: эластичные манжеты, два передних кармана с клапанами и светоотражающие детали.</p>
                </div>
            </div>
        </>
    )
}