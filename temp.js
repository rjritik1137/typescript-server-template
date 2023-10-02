const rep = new Promise((res, rej) => {
    setTimeout(() => {
        res({ hello: 2 })
    }, 10000)
})
setInterval(() => {
    console.log(rep)
}, 3000)
