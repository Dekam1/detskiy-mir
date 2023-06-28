import style from "./style.module.scss";

function AddButton() {
    return (
        <button
            className={style.product__button}
        >
            Добавить в корзину
        </button>
    );
};

export default AddButton;