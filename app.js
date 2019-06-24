//Chapter - 1 : Basic Concept

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
/* const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req, res)=>res.send('Hello World! with Express :)'));

app.listen(port, ()=> console.log(`Server started on ${port}`));
 */

//Chapter - 2 : Routing
/* 
Syntax:
app.'METHOD_NAME'(PATH, HANDLER) 
*/

const express = require('express')
const app = express();
const port = 4000;
const books = require('./books.js');

app.use('/books', books);

//We can use same path for different type HTTP Requests
app.get('/', (req, res)=>res.send('This is get method'));
app.post('/', (req, res)=>res.send('This is post method'));
app.get('/about', (req, res)=>res.send('This is about page'));
app.get('/user', (req, res)=>res.send('This is user page'));

app.listen(port, ()=> console.log(`Server started on ${port}`));
/*
all
Syntax:
app.all(PATH, HANDLER) 
*/
app.all('/main',(req,res,next)=>{
    //codes will work until next
    console.log('Main route called');
    //if we don't use next clint side will be timeout
    next();
});

//on path we can use string, string pattern or regex
//String Patterns:
//? means optional letter
app.get('/us?er', (req, res)=>res.send('user versions'));

//+ means optional count of same letter 
app.get('/go+gle', (req, res)=>res.send('google versions'));

//optioanl text
//app.get('/go*gle', (req, res)=>res.send('google versions'));

//samoe operators for letter groups
app.get('/goo(abc)?gle', (req, res)=>res.send('google versions'));

//regex
//app.get(/.\d+/, (req, res)=>res.send('number versions'));

//PARAMETERS
/* 
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:4000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" } 
*/

app.get('/users/:userId/books/:bookId', (req, res)=>{
    res.send(`YOUR USER ID IS: ${req.params.userId}`)
});

//To seperate parameters, we can use - or .
/* 
Route path: /flights/:from-:to
Request URL: http://localhost:4000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
 */

app.get('/flights/:from-:to', (req, res)=>{
    res.send(`YOUR FLIGHT IS FROM: ${req.params.from} TO:${req.params.to} `)
});

/* 
Route path: /plantae/:genus.:species
Request URL: http://localhost:4000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
 */

app.get('/plantae/:genus.:species', (req, res)=>{
    res.send(`plantae for genus: ${req.params.genus} and for species:${req.params.species} `)
});

//Route handlers
app.get('/example/handler', (req, res, next)=>{
    console.log('This is handler smaple');
    next();
},(req,res)=>{
    res.send('This is handler smaple');
});

let cb0 = (req, res, next) => {
    console.log('This is Callback 0');
    next();
}

let cb1 = (req, res, next) => {
    console.log('This is Callback 1');
    next();
}

let cb2 = (req, res) => {
    console.log('This is Callback 2');
    res.send('This is handler array smaple');
}

app.get('/example/handler/array', [cb0,cb1,cb2]);

//ROUTER

