const { app } = require('./app')
const shortPolling = require('./shortPolling/index')
shortPolling()
const PORT = 4000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
