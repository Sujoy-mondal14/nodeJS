const express = require('express')
const {connectToMongoDb} = require('./connect')
const URL = require('./model/url')
const path = require('path')
const cookieParser = require('cookie-parser')
const {restrictToLoggedInUserOnly, checkAuth} = require('./middleware/auth')

const urlroute = require('./routes/urlRoute')
const staticRouter = require('./routes/staticRouter')
const userrouter = require('./routes/userRoute')

const app = express()

//Mongodb-Connection
connectToMongoDb('mongodb://127.0.0.1:27017/URL_Shortner')
.then(() => console.log('Mongodbconnect succesfull'))
.catch(err => console.log(err))

//ServerSide_Rendering
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

//Middle-Ware
app.use(express.json()) // for json data
app.use(express.urlencoded({extended: false})) // for form data
app.use(cookieParser())

//routes
app.use('/url',restrictToLoggedInUserOnly, urlroute)

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timeStamp: Date.now()
                }
            }
        }
    )
    res.redirect(entry.redirectedUrl)
})

app.use('/' ,checkAuth, staticRouter)
app.use('/users', userrouter)

//Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))