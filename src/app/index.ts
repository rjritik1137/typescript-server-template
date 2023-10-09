import Express from 'express'

const app = [Express(), Express()]
const cors = require('cors')
app.forEach((i) => i.use(cors()))
app.forEach((i) => i.use(Express.json()))
const setupApp = () => {
    const PORT = 4000
    app.forEach((a, i) => {
        a.listen(PORT + i, () => {
            console.log(`The server is running on port ${PORT + i}`)
        })
    })
}
export { app, setupApp }
