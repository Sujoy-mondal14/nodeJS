const express = require('express')
const http = require('node:http')

const app = express()
const server = http.createServer(app)
const PORT = 8000

server.listen(PORT, ()=> console.log(`Server started at ${PORT}`))

module.exports = app