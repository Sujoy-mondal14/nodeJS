const {Router} = require('express')
const {handelSignUp} = require('../controller/handelSignUp.js')
const {handelSignIn} = require('../controller/handelSignIn.js')

const router = Router()

router.get('/sign-up', (req,res) => {
    return res.render('signup')
})
router.get('/sign-in', (req,res) => {
    return res.render('signin')
})

router.post('/sign-up', handelSignUp)
router.post('/sign-in', handelSignIn)

module.exports = router;