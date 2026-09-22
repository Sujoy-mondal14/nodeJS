const {Router} = require('express')
const upload = require('../controller/fileUpload.js')
const {handelAddBlogs} = require('../controller/blogs/handelAddBlogs.js')
const { checkForAuthenticationCookie } = require('../middlewares/authentication.js')
const {handelBlogView} = require('../controller/blogs/handelBlogView.js')
const { handelCommentPost } = require('../controller/blogs/handelCommentPost.js')


const route = Router()

route.get('/add-blogs', (req,res) => {
    return res.render('addBlogs', {
        user: req.user
    })
})
route.get('/:id', handelBlogView)

route.post('/', checkForAuthenticationCookie('token'), upload.single('coverImage'),handelAddBlogs);
route.post('/comments/:blogId', handelCommentPost)

module.exports = route