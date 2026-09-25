const app = require('./app.js')
const http = require('node:http')

const server = http.createServer(app)
const PORT = 8000


server.listen(PORT, ()=> console.log(`Server started at ${PORT}`))