
const Beverage = require('../lib/Beverage.js')

test('New beverage should be instance of constructor', () => {
    const beverage = new Beverage('Sprite', 100, 1.25, 12, 'cherry' )
    expect(beverage).toBeInstanceOf(Beverage)
})

test('getMainFlavor() return the main flavor', () => {
    const beverage = new Beverage('tropical', 20, 1.25, 12, 'berryBlast')
    expect(beverage.getMainFlavor()).toBe('berryBlast')
})