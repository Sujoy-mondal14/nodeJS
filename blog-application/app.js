const express = require('express')
const userRoute = require('./routers/user.js')


const app = express();

//Middle wares
app.use(express.urlencoded({extended: false}))

//routes
    // home-page
    app.get('/', (req,res) => {
    return res.render('home')
    })
    //userRoute
    app.use('/users', userRoute)



module.exports = app