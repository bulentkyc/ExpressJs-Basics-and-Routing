//Create a node server without Express
/* 
const http = require('http');
const port = 4000;

const server = http.createServer((req,res)=>{
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<html><h1>Hello World! without express</h1></html>');
        res.end();
    }
});

server.listen(port);
console.log(`Server started on ${port}`);
 */
//Create a node server with Express
const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req, res)=>res.send('Hello World! with Express :)'));

app.listen(port, ()=> console.log(`Server started on ${port}`));