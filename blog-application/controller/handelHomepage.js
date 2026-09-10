const BLOG = require('../model/blogSchema.js')

async function handelHomepage(req,res) {
    const allBlogs = await BLOG.find({})
    return res.render('home', {
        user: req.user,
        blogs: allBlogs
    })
}

module.exports = {
    handelHomepage
}