import { app, setupApp } from './app'
import setUpShortPolling from './shortPolling/index'
import setUpLongPolling from './longPolling/index'
import { submit } from './jobs/utils'

app.forEach(setUpShortPolling)
app.forEach(setUpLongPolling)
app.forEach((a) => a.post('/submit', submit))

setupApp()
