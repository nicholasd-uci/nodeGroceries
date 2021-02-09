class Product {
    constructor (name, quantity, price) {
        this.name
        this.quantity
        this.price
    }
    getName () {
        return this.name
    }
    getQuantity () {
        return this.quantity
    }
    getPrice () {
        return this.price
    }
    getType () {
        return 'product'
    }
}

module.exports = Product