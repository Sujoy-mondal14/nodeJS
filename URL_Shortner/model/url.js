const mongo = require('mongoose');

//Schema
const urlSchema = new mongo.Schema({
    shortId: {
        type:String,
        required: true,
        unique: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timeStamp : {
            type: Number
        }
    }],
    createdBy: {
        type: mongo.Schema.Types.ObjectId,
        ref:'users'
    }
}, {
    timestamps: true
})

//Schema Model
const URL = mongo.model('url', urlSchema)

module.exports = URL