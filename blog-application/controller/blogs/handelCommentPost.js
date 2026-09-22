const COMMENT = require("../../model/commentSchema.js")

async function handelCommentPost(req, res) {
    
    try {
        const comment = await COMMENT.create({
            content: req.body.content,
            blogId: req.params.blogId,
            createdBy: req.user._id
        })
        return res.redirect(`/blogs/${req.params.blogId}`)
    } catch (error) {
        
    }
}

module.exports = {
    handelCommentPost
}