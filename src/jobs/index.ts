type STATUS = 'PENDING' | 'DONE' | 'ERROR'

let result: { [key: string]: { status: STATUS; data: any } } = {}

export { result }
