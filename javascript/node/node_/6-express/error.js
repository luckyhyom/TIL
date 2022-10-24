// ! node는 미들웨어 체이닝이다. 흐름이 만들어져야한다.
// 각각의 미들웨어는 send,next로 반응해주어야한다.
// 하나의 미들웨어에는 send가 하나만 있어야 한다. (조건문일때 return 사용하기)

import express from 'express'
import fs from 'fs';
import fetch from 'node-fetch';
import fsAsync from 'fs/promises'

// try/catch하지 않고, async,return을 이용해서..  
import 'express-async-errors';

const app = express();

app.get('/err',(req,res,next)=>{
    try{
        fs.readFileSync('./file.txt');
    }catch(error){
        res.sendStatus(404);
    }
})



app.get('/err2',(req,res,next)=>{
    fsAsync.readFile('/file2.txt').then(res.send).catch(error=>res.sendStatus(500));
})

app.get('/err3',async (req,res,next)=>{
    try {
        const data = await fsAsync.readFile('./file2.txt');
        req.send(data);    
    } catch (error) { 
        res.sendStatus(403);
    }
})

app.use((req,res,next)=>{

})

app.use((error,req,res,next)=>{
    console.log(error);
    res.status(500).send('Sorry, later');
})


app.listen(8080);

// npm i express-async-errors