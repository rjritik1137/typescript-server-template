const { jobs } = require('./index')
function submit(req, res) {
    let jobId = new Date().getTime()
    while (jobId in jobs) {
        jobId += 1
    }
    jobs[jobId] = 10
    res.send({ jobId: jobId })
}

function validation(req, res, next) {
    const jobId = req.query.jobId
    if (!(jobId in jobs)) {
        res.set(400).send({ message: 'JobId is invalid' })
        return
    }
    next()
}

function executeJob(jobId) {
    const id = setInterval(() => {})
}

module.exports = { submit, validation }
