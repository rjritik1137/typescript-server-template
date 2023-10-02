const { app } = require('../app')
const { jobs } = require('../jobs')
const { validation } = require('../jobs/utils')
const shortPolling = () => {
    app.get('/poll', validation, (req, res) => {
        status(req, res)
    })
    setInterval(() => {
        Object.keys(jobs).forEach((jobId) => {
            jobs[jobId] += Math.random() * 10
        })
    }, 1000)
}
function status(req, res) {
    const jobId = req.query.jobId
    if (!(jobId in jobs)) {
        res.set(400).send({ message: 'JobId is invalid' })
        return
    }
    res.send({ progress: jobs[jobId] })
}

module.exports = { shortPolling }
