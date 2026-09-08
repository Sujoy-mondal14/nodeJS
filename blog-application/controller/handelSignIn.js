const USER = require("../model/userSchema.js")


async function handelSignIn(req,res) {
    const {email,password} = req.body

    try {
        const token = await USER.matchPasswordAndGenerateToken(email, password)
        console.log(token);
        return res.cookie('token', token).redirect('/')
    } catch (error) {
        return res.render('signin', {
            error: "Invalid Password or Email !"
        })
    }
    
}

module.exports = {
    handelSignIn
}