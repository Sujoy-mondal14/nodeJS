const express = require('express')
const {connectToMongoDb} = require('./connect')
const urlroute = require('./routes/urlRoute')
const URL = require('./model/url')

const app = express()

//Mongodb
connectToMongoDb('mongodb://127.0.0.1:27017/URL_Shortner')
.then(() => console.log('Mongodbconnect succesfull'))
.catch(err => console.log(err))

//Middle-Ware
app.use(express.json())

//routes
app.use('/url', urlroute)

app.get('/:shortId', async (req, res) => {
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

//Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))