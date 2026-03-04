function total(basket) {
    return basket
        .map((item) => item.price * item.quantity)
        .reduce((price, subtotal) => subtotal + price, 0.0)
}

module.exports = total;