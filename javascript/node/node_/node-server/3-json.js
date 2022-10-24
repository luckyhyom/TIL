const http = require('http');
const fs = require('fs');

const courses = [{name:'HTML'},{name:'CSS'},{name:'JS'},{name:'NODE'}];

const server = http.createServer((req,res)=>{

    const url = req.url; // what?
    const method = req.method // how?

    console.log(url);
    console.log(method);
    if(url==='/course'){
        if(method==='GET') {
            // res.writeHead(200,{'Content-Type':'application/json'});
            res.writeHead(200,{'Content-Type':'text/html'});
            // res.end(JSON.stringify(courses));
            res.write("JSON.stringify(courses)");
        }
    }

});

server.listen(8081);