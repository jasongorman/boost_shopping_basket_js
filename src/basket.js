function total(basket) {
    let subtotal = 0.0;

    for(item of basket){
        subtotal += item.price;
    }

    return subtotal;
}

module.exports = total;