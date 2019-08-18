const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data)
    }, 2000)
}

geocode('test', (data) => {
    console.log(data)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x+y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})