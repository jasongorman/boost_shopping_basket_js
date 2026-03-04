const assert = require("assert");
const total = require("../src/basket.js")

describe("Sopping basket total", () => {
    it("is zero when the basket is empty", () => {
        const basket = [];
        assert.strictEqual(total(basket), 0.0);
    })

    it("is the price of a single item", () => {
        const basket = [
            {
                price: 9.99,
                quantity: 1
            }
        ];

        assert.strictEqual(total(basket), 9.99);
    })

    it("is the sum of prices of two items", () => {
        const basket = [
            {
                price: 10.0,
                quantity: 1
            },
            {
                price: 5.0,
                quantity: 1
            }
        ];

        assert.strictEqual(total(basket), 15.0);
    })
})