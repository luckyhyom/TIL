import express from 'express'
const app = express();

app.listen(8080);

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
    res.setHeader(
        'key','value'
    );
    res.json({name:'hyomin'});

})