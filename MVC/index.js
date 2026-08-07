const express = require('express')
const userRouter = require('./routes/user');
const {connectMongoDb} = require('./conection')
const {logReqRes} = require('./middleware/index')

const app = express();


//DB-connect
connectMongoDb('mongodb://127.0.0.1:27017/MongoDb_Test')
.then(()=> console.log('MOngoDB connected'))
.catch(err => console.log(`MongoDb Connection error: ${err}`))

//MiddleWare->
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('./logs/reqResLog.txt'))

//Routers->
app.use('/api/users', userRouter)

//Server->
const PORT = 8000;
app.listen(PORT, () => console.log(`SERVER STARTED AT PORT: ${PORT}`))