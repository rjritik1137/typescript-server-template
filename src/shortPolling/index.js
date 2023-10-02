const { app } = require('../app')
const { shortPolling } = require('./server')
const setUpShortPolling = () => {
    shortPolling(app)
}

module.exports = setUpShortPolling
