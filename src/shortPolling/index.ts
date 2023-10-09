import { Application } from 'express'
import { shortPolling } from './server'
const setUpShortPolling = (app: Application) => {
    shortPolling(app)
}

export default setUpShortPolling
