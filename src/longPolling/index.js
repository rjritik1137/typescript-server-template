const { app } = require('../app')
const { longPolling } = require('./server')
const setupLongPolling = () => {
    shortPolling(app)
}

module.exports = setupLongPolling
