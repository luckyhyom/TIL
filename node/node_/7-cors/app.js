import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import helmet from 'helmet';


// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
//     res.setHeader(
//         'Access-Control-Allow-Method',
//         'OPTIONS, GET, POST, PUT, DELETE'
//     );
//     next();
// });

const corsOptions = {
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true,
};

const app = express();
app.use(express.json());
app.use(cookieParser());
// 모니터링용 외부 미들웨어
app.use(morgan('combined'));
app.use(cors(corsOptions));
// 보안에 필요한 헤더들을 추가해주는 미들웨어
// app.use(helmet());




app.get('/',(req,res)=>{
    // body를 보려면 express.json이 필요함.
    console.log(req.body);

    // cookie를 확인하려면 cookie-parser필요
    console.log(req.cookies);
    res.send('Welcome!');
})

app.listen(8080);