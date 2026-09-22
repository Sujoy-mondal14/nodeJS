const { Schema, model } = require('mongoose')


const commentSchema = Schema({
    content:{
        type: String,
        required: true,
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref:'userBlog'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
},{
    timestamps: true,
})

const COMMENT = model('comments', commentSchema);

module.exports = COMMENT