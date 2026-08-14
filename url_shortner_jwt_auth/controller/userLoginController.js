const {v4:uuidv4} = require('uuid')
const {setUser} = require('../services/auth')
const USER = require('../model/usersModel')

async function handelUserLogin(req,res){
    const { email, password} = req.body

   const user =  await USER.findOne({
        email,
        password
    })

    if(!user) return res.render('login', {
        error: 'invalid email or password'
    })

    const token =setUser(user)
    res.cookie('uid', token)
    return res.redirect('/')
    
}


module.exports = {
     handelUserLogin
}