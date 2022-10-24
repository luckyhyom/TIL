import express from 'express';
import cors from 'cors';
import request from 'request';

const app = express();

app.use(express.json());
app.use(cors());

// fetch('http://127.0.0.1/option/31').then(res=>res.json()).then(console.log)
app.get('/option/:productId',(req,res,next)=>{
    const productId = req.params.productId;

    var options = { method: 'GET',
        url: `https://connerstone21.cafe24api.com/api/v2/products/${productId}/options`,
        headers: {
            'Content-Type': "application/json",
            'X-Cafe24-Client-Id': "Ay6xh4bHAhBrHHivdABG8A"
        }
    };

    request(options, function (error, response, body) {
        // 서버의 url에 접속하면 페이지의 형태밖에 떠올리지 못했는데, 그냥 json형태로 넘겨주는 서버가 api서버다.
        // 페이지를 들어가지 않고 Url에 요청만 해도 데이터를 받을 수 있다.
        res.setHeader('Content-Type','application/json');
        res.send(body);
    });

});

app.get('/product/:productId',(req,res,next)=>{

});

app.listen(80);