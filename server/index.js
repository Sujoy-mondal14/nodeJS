const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((request, response) => {
    const log = `${Date.now().toString()} :: ${request.method}/ User at ${request.url}
    `
    const myUrl = new URL(request.url, `http://${request.headers.host}`);
    // console.log(myUrl);

    fs.appendFile('log.txt', log, (error) => {
        // if (request.url === '/favicon.ico') response.end();
        if (error) {
            response.end('404 Not Found')
            console.log(error)
        } else {

            switch (myUrl.pathname) {
                case '/': if(request.method === 'GET') response.end(`welcome to home page`);
                    break;

                case '/about': response.end('Helllo this is sujoy here ');
                    break;

                default: response.end('404 Not Found');
                    break;
            }

            console.log(`New User!`);
        }

    })
})

myServer.listen(8000, () => console.log(`Server Started !`))