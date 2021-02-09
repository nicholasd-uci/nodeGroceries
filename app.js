const { prompt } = require('inquirer')

let products = []

const mainMenu = () => {
    prompt([
        {
            type: 'list',
            name: 'type'
        }
    ])
}