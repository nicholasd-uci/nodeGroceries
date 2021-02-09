const Food = require('../lib/Food.js')

test('New food should be instance of constructor', () => {
    const food = new Food('chicken', 50, 10, '12/12/2020', 'protein')
    expect(food).toBeInstanceOf(Food)
})

test('getExpirationDate() returns the expiration date', () => {
    const food = new Food('chocolate', 30, 3, '02/01/2022', 'sweets')
    expect(food.getExpirationDate()).toBe('02/01/2022')
})