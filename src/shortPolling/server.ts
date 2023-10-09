import { Application, RequestHandler } from 'express'
import { result } from '../jobs'
import { validation } from '../jobs/utils'

const shortPolling = (app: Application) => {
    app.get('/poll', validation, status)
}

const status: RequestHandler = (req, res) => {
    const jobId = req.query.jobId
    res.send({ body: result[jobId as string] })
}

export { shortPolling }
