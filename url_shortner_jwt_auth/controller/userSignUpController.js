const {v4: uuidv4 } = require('uuid')
const USER = require('../model/usersModel')
const {setUser} = require('../services/auth')

async function handelUserSignUp(req,res){
    const {name, email, password} = req.body

    await USER.create({
        name,
        email,
        password
    })
    const sessionId = uuidv4()
    return res.render('home')
}


module.exports = {
    handelUserSignUp
}