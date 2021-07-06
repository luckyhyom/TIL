// ! node는 미들웨어 체이닝이다. 흐름이 만들어져야한다.
// 각각의 미들웨어는 send,next로 반응해주어야한다.
// 하나의 미들웨어에는 send가 하나만 있어야 한다. (조건문일때 return 사용하기)

import express from 'express'
const app = express();

// IP 네트워크상의 주소
// Port 어떤 어플리케이션에 접속할건지.

// id가 같이 입력되어야만 받음.
app.get('/product/:id',(req,res,next)=>{
    // console.log(req.headers);
    console.log(req.params);
    console.log(req.params.id);
    // query는 url에서 아무거나 보내줄수있고, 그중에 골라서 받음
    console.log(req.query);
    console.log(req.query.keyword);
    
    // res.sendStatus(400);
    res.setHeader('key','value');
    res.json({name:'hyomin'});
})

app.get('/',(req,res,next)=>{
    console.log('first');
    // next(new Error());
    // next('route');
    
    // return을 사용하여, 미들웨어를 빠져나가게함. ->send를 한번만 호출
    if(true){
        return res.send('Hello');
    }
    res.send('Hello2');

    next();


},(req,res,next)=>{
    console.log('first2');
})

app.get('/',(req,res,next)=>{
    console.log('second');
})

app.use((req,res,next)=>{

})

app.use((error,req,res,next)=>{
    console.log(error);
    res.status(500).send('Sorry, do this later!');
})


// 모든 요청(crud)에 대해 api일때 반응한다. /api/* 모든걸 명시하면 use처럼 사용가능
app.all('/api',(req,res,next)=>{
    console.log('all');
    next();
})

// '/sky' '/sky/A/B/C' 반응
app.use('/sky',(req,res,next)=>{
    console.log('use');
    next();
})

app.listen(8080);