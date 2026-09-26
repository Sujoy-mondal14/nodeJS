const app = require('./app.js')
const http = require('node:http')
const { Server } = require('socket.io')


const server = http.createServer(app)
const PORT = 8000
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('user-message', message => {
        io.emit('message', message)
    })
})

server.listen(PORT, ()=> console.log(`Server started at ${PORT}`))