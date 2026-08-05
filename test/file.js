const { error } = require('console')
const fs = require('fs')

//Async..Write
// fs.writeFile('./test.txt' , 'hello world', (error) => {
//     if (error) console.log(error);
    
// })

//Sync...Write
// fs.writeFileSync('./test.txt' , 'nice to meet you')

//Sync..read
// const result = fs.readFileSync('./test.txt', 'utf-8')
// console.log(result);

//Async...read
// fs.readFile('./test.txt', 'utf-8', (error, result) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result);
//     }
// })

// Append _Sync
// fs.appendFileSync('./test.txt' , `\n nice to be here\n ${Date.now()}`)

//Append _Async
// fs.appendFile('./test.txt', `\n ${Date.now()} succesfull`, (error) =>{
//     if(error) console.log(error);
    
// })

//Sync-Copy
// fs.cpSync('./test.txt' , './copy.txt')

//deleteFile
// fs.unlinkSync('./copy.txt')

//make-Directory
fs.mkdirSync('./tets/')
