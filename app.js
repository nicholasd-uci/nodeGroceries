const { prompt } = require('inquirer')

let products = []


// {
//     type: 'input',
//     name: 'expirationDate',
//     message: 'Enter Product Expiration Date:'
// },
// {
//     type: 'input',
//     name: 'foodGroup',
//     message: 'Enter Product Food Group:'
// }


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