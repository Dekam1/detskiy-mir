import React from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.scss";

import setCartItemQty from "../../store/actionCreators/setCartItemQty";

function ControlButton({ id, quantity }) {
    const dispatch = useDispatch();

    function decrement() {
        dispatch(setCartItemQty('decrement', id));
    };

    function increment() {
        dispatch(setCartItemQty('increment', id));
    };

    function disabledButton() {
        return quantity === 0 ? true : false;
    };

    return (
        <div className={style.buttons}>
            <button disabled={disabledButton()} onClick={decrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52V52H12C5.37258 52 0 46.6274 0 40V12Z" fill="#E6F1FC" />
                    <path d="M31.8331 27.4583L20.1664 27.4583C18.9778 27.4583 18.904 24.5417 20.1664 24.5417L31.8331 24.5417C33.0217 24.5417 33.0956 27.4583 31.8331 27.4583Z" fill="#0073E6" />
                </svg>
            </button>
            <span>{quantity}</span>
            <button onClick={increment} >
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <path d="M0 0H40C46.6274 0 52 5.37258 52 12V40C52 46.6274 46.6274 52 40 52H0V0Z" fill="#E6F1FC" />
                    <path d="M26.8104 19.3974C26.3983 19.2424 25.6012 19.2424 25.1892 19.3974C24.5637 19.6329 24.5414 20.2226 24.5414 20.7917V24.5417L20.1664 24.5417C18.904 24.5417 18.9778 27.4583 20.1664 27.4583L24.5414 27.4583V31.2083C24.5414 31.7774 24.5637 32.3672 25.1892 32.6026C25.6012 32.7577 26.3983 32.7577 26.8104 32.6026C27.4359 32.3672 27.4581 31.7774 27.4581 31.2083V27.4583L31.8331 27.4583C33.0956 27.4583 33.0217 24.5417 31.8331 24.5417L27.4581 24.5417V20.7917C27.4581 20.2226 27.4359 19.6329 26.8104 19.3974Z" fill="#0073E6" />
                </svg>
            </button>
        </div>
    );
};

export default ControlButton;