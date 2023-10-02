import Express from 'express'

const app = Express()
const cors = require('cors')
app.use(cors())
app.use(Express.json())
export { app }
