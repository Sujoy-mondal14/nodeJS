const {model, Schema} = require('mongoose')

const blogSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    coverImage:{
        type: String,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const BLOG = model('userBlog', blogSchema)

module.exports = BLOG