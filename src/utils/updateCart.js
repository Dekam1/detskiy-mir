import axios from "axios";

async function updateCart(cartItems) {
    const objArray = await cartItems.map(item => ({
        id: item.product.id,
        quantity: item.quantity ? item.quantity : 1
    }));
    try {
        if (objArray.length) {
            await axios.post('https://skillfactory-task.detmir.team/cart/update', { data: objArray }, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
        }
    } catch (error) {
        alert('При выполнение запроса возникла ошибка:(')
    }
};

export default updateCart;