type STATUS = 'PENDING' | 'DONE' | 'ERROR'
let jobs: { [key: string]: any } = {}
let result: { [key: string]: { status: STATUS; data: any } } = {}

export { jobs, result }
