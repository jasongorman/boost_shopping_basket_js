const subtotal = require("../src/item.js")

function total(basket) {
    return basket
        .map((item) => subtotal(item))
        .reduce((price, subtotal) => subtotal + price, 0.0)
}

module.exports = total;