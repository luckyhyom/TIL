// require is not defined
// const express = require('express');

import express from 'express';
import fetch from 'fetch';
const app = express();

app.use(express.json());

app.post('/test',(req,res,next)=>{
    console.log(req.body);
    res.send('good');
});

app.use((err,req,res,next)=>{
    console.log('error');
    console.log(err);
});

app.listen(8080);

// fetch.FetchStream('127.0.0.1:8080/test');

// console.log(fetch);