function createDateOrder(order) {
    let date = '';
    let totalPrice = 0;
    let html = '';
    order.forEach(item => {
        const itemDate = item.createdAt;
        const itemPrice = item.product.price;
        const itemImage = item.product.picture;
        const qty = item.quantity;

        date = itemDate;
        totalPrice += itemPrice * qty;
        html += `<img src=${itemImage} key=${item.product.id} />`
    });

    return { date, totalPrice, html };
}

export default createDateOrder;