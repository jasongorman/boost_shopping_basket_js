const assert = require("assert");

function total(basket) {
    return 0.0;
}

describe("Sopping basket total", () => {
    it("is zero when the basket is empty", () => {
        let basket = [];
        assert.strictEqual(total(basket), 0.0);
    })
})