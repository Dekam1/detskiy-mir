import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export default function Header() {
    const navLinkClass = [style.nav_link];

    function addClass({ isActive }) {
        return isActive
            ? [...navLinkClass, style.active].join(' ')
            : navLinkClass
    }

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img width={150} height={24} src="/img/Logo.png" alt="logo" />
            </div>
            <nav className={style.nav}>
                <NavLink className={addClass} to="/">
                    Товары
                </NavLink>
                <NavLink className={addClass} to="/orders">
                    Заказы
                </NavLink>
            </nav>
            <NavLink to="/basket" className={style.basket_link}>
                <div className={style.basket}>
                    <span>Корзина (0)</span>
                </div>
            </NavLink>
        </header>
    )
}