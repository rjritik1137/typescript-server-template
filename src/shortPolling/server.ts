import { RequestHandler } from 'express'
import { app } from '../app'
import { result } from '../jobs'
import { validation } from '../jobs/utils'

const shortPolling = () => {
    app.get('/poll', validation, status)
}

const status: RequestHandler = (req, res) => {
    const jobId = req.query.jobId
    res.send({ progress: result[jobId as string].data })
}

export { shortPolling }
