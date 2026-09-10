const express = require('express')
const path = require('node:path')
const homeRoute = require('./routers/home.js')
const userRoute = require('./routers/user.js')
const blogRoutes = require('./routers/blog.js')
const cookieParser = require('cookie-parser')
const { checkForAuthenticationCookie } = require('./middlewares/authentication.js')


const app = express();

//Middle wares
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.join(__dirname, 'public')));

//routes
// home-page
app.get('/', homeRoute)
//userRoute
app.use('/users', userRoute)
//blogRoutes
app.use('/blogs', blogRoutes)



module.exports = app