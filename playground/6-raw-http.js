const https = require('https')
const weatherApiSecretKey = '56bddf80593def5863ccbf739deef9af'
const weatherApiBaseUrl = 'https://api.darksky.net/forecast/'
const url = weatherApiBaseUrl + weatherApiSecretKey + '/' + 18 + ',' + 73 + '?units=si'

const req = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
req.on('error', (error) => {
    console.log(error)
})
req.end()