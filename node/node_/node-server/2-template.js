const http = require('http');
const fs = require('fs');

// ejs => jsp같은 것
const ejs = require('ejs');
const name = 'Hyomin';
courses = [{name:'HTML'},{name:'CSS'},{name:'JS'},{name:'NODE'}];

const server = http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
        // index.ejs에 데이터를 전달하겠다. / 변수와 값의 이름이 같다면..
        ejs.renderFile('./templates/index.ejs',{name}).then(data=>res.end(date));
    }else if(url==='/course'){
        fs.createReadStream('./html/index.html').pipe(res);
    }else{
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    // fileStream사용할때 res.end()함수를 사용하면 화면에 아무것도 뜨지 않음.
    // res.end();
});

server.listen(8080);