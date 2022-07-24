'use strict'
const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////
//FILES
//Blocking or Synchronous way
//To read from a file
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn)

const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()}`;
//To write into a file
fs.writeFileSync('./starter/txt/output.txt', textOut);

//Non-blocking or Asynchronous way
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('Error, check code')
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3)
//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written')
//             });
//         });
//     });
// });
// console.log('Will read file')

/////////////////////////////////////
//SERVER
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end('Hello from the server');
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world',
        })
        res.end('<h1>Page not found</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});