const fs = require('fs');

function logReqRes(fileName){
    return(req, res, next) => {
        fs.appendFile(fileName,`\n ${Date.now()} at ${req.method} : ${req.path}`, err => {
           if(err)
            console.log(err);
            
        } )
        next();
    }
}

module.exports = logReqRes;