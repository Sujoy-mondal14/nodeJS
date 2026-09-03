const USER = require("../model/userSchema.js")


async function handelSignIn(req,res) {
    const {email,password} = req.body

    const user = USER.matchPassword(email, password)
    console.log(user);
    return res.redirect('/')
    
}

module.exports = {
    handelSignIn
}