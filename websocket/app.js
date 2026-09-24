const app = require('./server.js')
const path = require('node:path')

app.use(app.static(path.resolve('./public')))

app.get('/', (req, res)=>{
    return res.sendFile('/public/index.html')
})