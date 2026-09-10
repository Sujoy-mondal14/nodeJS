const BLOG = require('../../model/blogSchema.js')

async function handelBlogView(req,res) {
    try {
        const id = req.params.id
        const blog = await BLOG.findById(id).populate('createdBy')
        console.log(blog);
        
        return res.render('blog', {
            user: req.user,
            blog: blog
        })
    } catch (error) {
        return res.redirect('/', {
            error: error
        })
    }
}

module.exports = {
    handelBlogView
}