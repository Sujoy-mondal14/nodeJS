const express = require('express')
const userRoute = require('./routers/user.js')
const cookieParser = require('cookie-parser')
const { checkForAuthenticationCookie } = require('./middlewares/authentication.js')


const app = express();

//Middle wares
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))

//routes
    // home-page
    app.get('/', (req,res) => {
    return res.render('home',{
        user: req.user,
    })
    })
    //userRoute
    app.use('/users', userRoute)



module.exports = app