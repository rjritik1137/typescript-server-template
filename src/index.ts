import { app } from './app'
import shortPolling from './shortPolling/index'
import { submit } from './jobs/utils'
shortPolling()
app.post('/submit', submit)
const PORT = 4000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
