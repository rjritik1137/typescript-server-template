import { Application } from 'express'
import { longPolling } from './server'
const setUpLongPolling = (app: Application) => {
    longPolling(app)
}

export default setUpLongPolling
