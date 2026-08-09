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
    }]
}, {
    timestamps: true
})

//Schema Model
const URL = mongo.model('url', urlSchema)

module.exports = URL