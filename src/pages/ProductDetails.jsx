import React from "react";
import { CircularProgress, Rating } from "@mui/material";
import Header from "../containers/header/Header";
import { useParams } from "react-router";
import getOneProduct from "../store/actionCreators/getOneProduct";
import { useDispatch, useSelector } from "react-redux";
import formatPrice from "../utils/formatPrice";
import HtmlComponent from "../containers/HtmlComponent";

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product = {}, isFetching } = useSelector(state => state);

    React.useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id]);



    return (
        <>
            <Header />
            <div className="product__wrapper">
                {isFetching ? <CircularProgress /> : <>
                    <div className="product">
                        <div className="product__main">
                            <div className="product__left">
                                <img src={product.picture} alt="product img" />
                            </div>
                            <div className="product__right">
                                <h3 className="product__title">
                                    {product.title}
                                </h3>
                                <Rating
                                    name="read-only"
                                    size="small"
                                    value={product.rating}
                                    readOnly
                                    precision={0.1}
                                />
                                <p className="product__price">
                                    {formatPrice(product.price)} ₽
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
                        <HtmlComponent html={product.description} />
                        {/* <div className="details__text" dangerouslySetInnerHTML={{ __html: product.description }} /> */}
                    </div>
                </>}
            </div>
        </>
    )
}