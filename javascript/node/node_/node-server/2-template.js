const http = require('http');
const fs = require('fs');

// ejs => jsp같은 것
const ejs = require('ejs');
const name = 'Hyomin';
const courses = [{name:'HTML'},{name:'CSS'},{name:'JS'},{name:'NODE'}];

const server = http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
        // index.ejs에 데이터를 전달하겠다. / 변수와 값의 이름이 같다면..
        ejs.renderFile('./templates/index.ejs',{name}).then(data=>res.end(data));
    }else if(url==='/course'){
        ejs.renderFile('./templates/course.ejs',{courses}).then(data=>{res.end(data)});
    }else{
        ejs.renderFile('./templates/not-found.ejs',{name}).then(data=>{res.end(data)});
    }
    // fileStream사용할때 res.end()함수를 사용하면 화면에 아무것도 뜨지 않음.
    // res.end();
});

server.listen(8088);