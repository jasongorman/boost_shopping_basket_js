const assert = require("assert");
const total = require("../src/basket.js")

describe("Sopping basket total", () => {
    it("is zero when the basket is empty", () => {
        const basket = [];
        assert.strictEqual(total(basket), 0.0);
    })
})