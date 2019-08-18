//Object property shorthand

const name = 'Titan'
const age = 345
const place = 'Neomlhir'

const user = {
    name,
    age,
    location: place
}
console.log(user)

// Object destructuring
const product = {
    label: 'book',
    price: 50,
    stock: 576
}
//const label = product.label
const {label:productLabel, stock, rating = 5, discount} = product
//console.log(label)
console.log(productLabel)
console.log(stock)
console.log(rating)
console.log(discount)

const transact = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transact('order', product)