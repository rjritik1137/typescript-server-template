const { app } = require('../app')
let jobs = {}
const intialise = () => {
    jobs = {}
}
const shortPolling = () => {
    intialise()
    app.post('/submit', submit)
    app.get('/status', (req, res) => {
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

function submit(req, res) {
    let jobId = new Date().getTime()
    while (jobId in jobs) {
        jobId += 1
    }
    jobs[jobId] = 10
    res.send({ jobId: jobId })
}

module.exports = { shortPolling }
