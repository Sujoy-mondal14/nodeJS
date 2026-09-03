const app = require('./app.js')
const path = require('path')
const {ConnectDB} = require('./dbConnection.js')

const PORT = 8000

//Data Base
ConnectDB("mongodb://127.0.0.1:27017/blog-application")

// view engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

//Server Port 
app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`))