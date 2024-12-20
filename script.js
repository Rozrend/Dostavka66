let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = cart
        .map((product, index) => `<p>${product.item} - ${product.price} руб. <button onclick="removeFromCart(${index})">Удалить</button></p>`)
        .join('');
    document.getElementById('checkout').disabled = cart.length === 0;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!address) {
        alert('Пожалуйста, введите адрес доставки!');
        return;
    }

    alert(`Спасибо за заказ! Ваш заказ будет доставлен по адресу: ${address}. Способ оплаты: ${paymentMethod === 'cash' ? 'Наличные' : 'Карта'}. Ожидайте курьера!`);
    cart = [];
    updateCart();
    document.getElementById('address').value = '';
    document.getElementById('payment-method').value = 'cash';
}
