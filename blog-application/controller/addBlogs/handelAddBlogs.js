const BLOG = require('../../model/blogSchema.js')

async function handelAddBlogs(req, res) {
    const {title,body} = req.body
   const blog = await  BLOG.create({
        title,
        body,
        coverImage: req.file ? `/images/uploads/${req.user._id}/${req.file.filename}` : undefined,
        createdBy: req.user._id
    })

    return res.redirect('/')
}

module.exports ={
    handelAddBlogs
}