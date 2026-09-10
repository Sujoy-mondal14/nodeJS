const {Router} = require('express')
const upload = require('../controller/fileUpload.js')
const {handelAddBlogs} = require('../controller/addBlogs/handelAddBlogs.js')
const { checkForAuthenticationCookie } = require('../middlewares/authentication.js')

const route = Router()

route.get('/add-blogs', (req,res) => {
    return res.render('addBlogs', {
        user: req.user
    })
})

route.post('/', checkForAuthenticationCookie('token'), (req, res, next) => {
    console.log('req.user before multer:', req.user);
    next();
}, upload.single('coverImage'), (req, res, next) => {
    console.log('req.file after multer:', req.file);
    console.log('req.body after multer:', req.body);
    next();
}, handelAddBlogs);

module.exports = route