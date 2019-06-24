var express = require('express');
var router = express.Router();

router.use((req,res,next)=>{
    console.log(`There is a new request on ${Date.now()}`);
    next();
});

router.get('/', (req,res)=>{
    res.send('Homepage for Books');
});

router.get('/about', (req,res)=>{
    res.send('About page for Books');
});

module.exports = router;