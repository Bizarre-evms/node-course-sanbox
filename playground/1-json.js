const fs = require('fs')
// const book = {
//     title: 'new book',
//     author: 'myself'
// }
// console.log(book)
// const bookjson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookjson)
// console.log(bookjson)
// const parsedData = JSON.parse(bookjson)
// console.log(parsedData.author)
// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataBuffer.toString())
// console.log(data.title)

const info = JSON.parse(fs.readFileSync('2-json.json').toString())
console.log(info)
info.name = 'Mritzi'
info.age++
fs.writeFileSync('2-json.json', JSON.stringify(info))