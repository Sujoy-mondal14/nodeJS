const mongo = require('mongoose');

async function connectToMongoDb(url){
   return  mongo.connect(url)
}

module.exports = {connectToMongoDb}