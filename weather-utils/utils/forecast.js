const request = require('request')
const weatherApiSecretKey = '56bddf80593def5863ccbf739deef9af'
const weatherApiBaseUrl = 'https://api.darksky.net/forecast/'

const forecast = (latitude, longitude, callback) => {
    const url = weatherApiBaseUrl + weatherApiSecretKey + '/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (body.error) {
            callback('Invalid location')
        } else {
            const currentData = body.currently
            callback(undefined, {
                summary: body.daily.summary,
                temperature: currentData.temperature,
                precipitation: currentData.precipProbability
            })
        }
    })
}

module.exports = forecast