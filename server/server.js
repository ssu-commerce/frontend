const http = require('http');

const express = require('express');

const textRouter = requrie('./router');

const app = express();

app.all('/', function(){
    console.log('Accessing the section')
})

app.use('/test', textRouter);

app.listen(3000, function(){
    console.log('server is doing');
})