const Product = require('../lib/Product.js')

test('New product should be instance of constructor', () => {
    const product = new Product('napkins', 100, 1.00)
    expect(product).toBeInstanceOf(Product)
})

test('getName() should return product name', () => {
    const product = new Product('cups', 100, 2.50)
    expect(product.getName()).toBe('cups')
})