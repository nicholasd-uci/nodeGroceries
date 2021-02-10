const { prompt } = require('inquirer')
const fs = require('fs')
const path = require('path')

const render = require('./lib/render.js')

const Product = require('./lib/Product.js')
const Food = require('./lib/Food.js')
const Beverage = require('./lib/Beverage.js')

let products = []

const buildFood = product => {
prompt([
        {
            type: 'input',
            name: 'expirationDate',
            message: 'Enter Product Expiration Date:'
        },
        {
            type: 'input',
            name: 'foodGroup',
            message: 'Enter Product Food Group:'
        }
    ])
    .then(({ expirationDate, foodGroup }) => {
        product.push(new Food(product.name, product.quantity, product.price, expirationDate, foodGroup))
        subMenu()
    })
    .catch(err => console.log(err))
}

const subMenu = () => {
    prompt([
        {
            type: 'list',
            name: 'action',
            choice: ['Make Another Product', 'Finish'],
            message: 'What would you like to do?'
        }
    ])
    .then(({ action }) => {
        switch (action) {
            case 'Make Another Product':
                mainMenu()
                break
            case 'Finish':
                const html = render(products)
                fs.writeFileSync(path.join(__dirname, 'output', 'index.html'), html)
                break
        }
    })
    .catch(err => console.log(err))
}

const mainMenu = () => {
    prompt([
        {
            type: 'list',
            name: 'type',
            choices: ['General Product', 'Food', 'Beverage'],
            message: 'Select the type of item you want to make:'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Product Name:'
        },
        {
            type: 'number',
            name: 'quantity',
            message: 'Enter quantity amount of product:'
        },
        {
            type: 'number',
            name: 'price',
            message: 'Enter product price:'
        }
        
    ])
    .then(product => {
        switch (product.type) {
            case 'General Product':
                products.push(new product(product.name, product.quantity, product.price))
                subMenu()
                break
            case 'Food':
                buildFood(product)
                break
            case 'Beverage':
                buildBeverage(product)
                break
        }
    })
    .catch(err => console.log(err) )
}

mainMenu()