import { RequestHandler } from 'express'
import { jobs, result } from './index'

const isValid = (jobId: any) => {
    return typeof jobId !== 'string' || !(jobId in jobs)
}
const submit: RequestHandler = (req, res) => {
    let jobId = new Date().getTime().toString()

    while (jobId in jobs) {
        jobId += 1
    }
    executeJob(jobId)
    res.send({ jobId: jobId })
}

const validation: RequestHandler = (req, res, next) => {
    const jobId = req.query.jobId
    if (isValid(jobId)) {
        res.set(400).send({ message: 'JobId is invalid' })
        return
    }
    next()
}

function executeJob(jobId: string) {
    result[jobId] = { status: 'PENDING', data: 0 }
    const id = setInterval(() => {
        result[jobId].data += Math.random() * 10
        if (result[jobId].data > 100) {
            result[jobId].status = 'DONE'
            clearInterval(id)
        }
    }, 1000)
}

export { submit, validation }
