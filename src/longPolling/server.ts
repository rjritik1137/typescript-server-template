import { Application, RequestHandler } from 'express'
import { validation } from '../jobs/utils'
import { result } from '../jobs'

const longPolling = (app: Application) => {
    app.get('/longPoll', validation, status)
}

const checkIfDone = (jobId: string) => {
    return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            if (result[jobId].status === 'DONE') {
                resolve(true)
            } else resolve(false)
        }, 400)
    })
}

const status: RequestHandler = (req, res) => {
    const jobId = req.query.jobId as string
    ;(async function () {
        while ((await checkIfDone(jobId)) === false);
        res.send({
            body: result[jobId],
        })
    })()
}

export { longPolling }
