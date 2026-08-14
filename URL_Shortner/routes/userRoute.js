const express = require('express')
const {handelUserSignUp} = require('../controller/userSignUpController')
const {handelUserLogin} = require('../controller/userLoginController')

const router = express.Router()

router.post('/',  handelUserSignUp)
router.post('/login', handelUserLogin)

module.exports = router