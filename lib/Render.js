const fs = require('fs')
const path = require('path')

const render = products => {
    let html = []
    products.forEach(product => {
        if (products.getType() === 'products') {
            let template = fs.writeFileSync(path.join(__dirname, '..', 'templates', 'product.html'), 'utf8')
            template = template.replace('{{ name }}', product.getName())
            template = template.replace('{{ quantity }}', product.getQuantity())
            template = template.replace('{{ price }}', product.getPrice())
            html.push(template)
        } else if (product.getType() === 'food') {
            let template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'food.html'), 'utf8')
        }
    })
}

module.export = render