import style from './style.module.scss';

function SubmitButton() {
    return (
        <button className={style.submit__button}>
            Оформить заказ
        </button>
    );
}

export default SubmitButton;