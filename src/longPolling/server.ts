import { app } from '../app'
import { validation } from '../jobs/utils'

const longPolling = () => {
    app.get('/longPoll', validation)
}

export { longPolling }
