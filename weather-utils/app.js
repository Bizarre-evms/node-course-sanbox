const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const searchKey = process.argv[2]
if (!searchKey) {
    return console.log('Please enter a location')
}

geoCode(searchKey, (error, {latitude, longitude, location}) => {
    if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude , (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        
        console.log(location)
        console.log(forecastData)
        
    })
})


