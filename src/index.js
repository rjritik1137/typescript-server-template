const express = require('express')
const app = express()
let connections = []
const LIMIT = 20;
const DELAY = 1000

app.get('/date', (req, res)=> {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.setHeader("Transfer-Encoding", "chunked")
    connections.push(res)
})


let tick = 0;
setTimeout(function run (){

    if(++tick > LIMIT) {
        connections.map(res=> {
            res.write("END\n")
            res.end()
        })
        connections = []
        tick = 0
    }
    connections.map((res, i)=>{
        res.write(`Hello connection ${i}! Tick ${tick}`)
    })
    setTimeout(run, DELAY)
}, DELAY)

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}`)
})

