import { app } from '../app'
import { status, validation } from '../jobs/utils'

const shortPolling = () => {
    app.get('/poll', validation, status)
}

export { shortPolling }
