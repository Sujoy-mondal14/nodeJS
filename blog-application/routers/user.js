const {Router} = require('express')
const {handelLogout} = require('../controller/userAuth/handelLogout.js')
const {handelSignIn} = require('../controller/userAuth/handelSignIn.js')
const {handelSignUp} = require('../controller/userAuth/handelSignUp.js')

const router = Router()

router.get('/sign-up', (req,res) => {
    return res.render('signup')
})
router.get('/sign-in', (req,res) => {
    return res.render('signin')
})
router.get('/log-out', handelLogout)

router.post('/sign-up', handelSignUp)
router.post('/sign-in', handelSignIn)

module.exports = router;