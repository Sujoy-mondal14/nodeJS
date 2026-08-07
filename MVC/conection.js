const mongoDB = require('mongoose');

async function connectMongoDb(url){
    return mongoDB.connect(url);
}

module.exports ={
    connectMongoDb
};