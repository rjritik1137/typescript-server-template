const { app } = require('./app')
const shortPolling = require('./shortPolling/index')
const { submit } = require('./jobs/utils')
shortPolling()
app.post('/submit', submit)
const PORT = 4000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
