const USER = require('../model/userSchema.js')

async function handelSignUp(req,res){
    const {fullName, email, password} = req.body

    USER.create({
        fullName,
        email,
        password
    })

    return res.redirect('/')
}

module.exports = {
    handelSignUp
}