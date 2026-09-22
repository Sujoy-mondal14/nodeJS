const BLOG = require('../../model/blogSchema.js')
const COMMENT = require('../../model/commentSchema.js')

async function handelBlogView(req,res) {
    try {
        const id = req.params.id
        const blog = await BLOG.findById(id).populate('createdBy')
        const comments = await COMMENT.find({blogId: req.params.id}).populate('createdBy')        
        return res.render('blog', {
            user: req.user,
            blog: blog,
            comments: comments
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