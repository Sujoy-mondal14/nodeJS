const express = require('express')
const path = require('node:path')

const app = express()
app.use(express.static(path.resolve('./public')))

app.get('/', (req, res)=>{
    return res.sendFile('/public/index.html')
})


module.exports = app;