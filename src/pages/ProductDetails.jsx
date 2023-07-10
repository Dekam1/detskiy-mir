import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { CircularProgress, Rating } from "@mui/material";

import Header from "../components/header/Header";
import HtmlComponent from "../components/HtmlComponent";

import getOneProduct from "../utils/getOneProduct";
import formatPrice from "../utils/formatPrice";
import AddButton from "../components/AddButton/AddButton";
import ControlButton from "../components/ControlButton/ControlButton";
import SubmitButton from "../components/SubmitButton/SubmitButton";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const { product, isFetching } = useSelector(state => state);
    const { category, picture, price } = product;

    React.useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id]);

    const findItem = cartItems.find((item) => item.product.id === id);
    const addedToCart = findItem?.product.id === id;
    const showControlButton = !!findItem?.quantity;

    return (
        <>
            <Header />
            <div className="product__wrapper">
                {isFetching ? <CircularProgress /> : <>
                    <div className="product">
                        <div className="product__main">
                            <div className="product__left">
                                <img draggable='false' src={product.picture} alt="product img" />
                            </div>
                            <div className="product__right">
                                <h3 className="product__title">
                                    {product.title}
                                </h3>
                                <Rating
                                    name="read-only"
                                    size="small"
                                    value={product.rating || 0}
                                    readOnly
                                    precision={0.1}
                                />
                                <p className="product__price">
                                    {formatPrice(product.price)} ₽
                                </p>
                                {addedToCart ? (
                                    <div className='buttons__wrapper'>
                                        {showControlButton && (
                                            <ControlButton
                                                id={findItem.product.id}
                                                quantity={findItem.quantity}
                                                action
                                            />
                                        )}
                                        <SubmitButton />
                                    </div>
                                ) : (
                                    <AddButton
                                        id={id}
                                        category={category}
                                        picture={picture}
                                        price={price}
                                    />
                                )}
                                <div className="product__conditions">
                                    <div className="product__conditions__text">
                                        <p>Условия возврата</p>
                                        <p>
                                            Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.
                                        </p>
                                        <p><span>Цены в интернет-магазине могут отличаться от розничных магазинов.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product__details">
                        <h3 className="details__title">Описание</h3>
                        <HtmlComponent html={product.description} />
                    </div>
                </>}
            </div>
        </>
    )
};

export default ProductDetails;