import React from "react";

import style from "./style.module.scss";

function ControlButton() {
    //Пока используем локальный стейт
    const [value] = React.useState(0);
    //Пока используем локальный стейт
    return (
        <div className={style.buttons}>
            <button />
            <span>{value}</span>
            <button />
        </div>
    );
};

export default ControlButton;