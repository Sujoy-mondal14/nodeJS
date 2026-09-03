const mongo = require('mongoose')

// async function dbConnect(URL) {
//     try {
//         await mongo.connect(URL)
//         console.log(`MongoDB conection succesfull`);
        
//     } catch (error) {
//         throw error
//     }
// }

let cachedConnection = null

const ConnectDB= async (URL) => {
    try {
        if(cachedConnection) return cachedConnection;
        cachedConnection = await mongo.connect(URL)
        console.log(`MongoDb succesfully connected ✅`)
        return cachedConnection;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    ConnectDB
}