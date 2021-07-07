import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
const app = express();

app.use(express.json()); // REST API -> BODY
app.use(express.urlencoded({extended:false})); //HTML Form -> BODY

// app.get('/photo.jpg',(rqe,res,next)=>{fs.readFile('./public/')})...
// public안의 모든 파일에 접근할수있게 함
app.use(express.static('public')); 


app.use('/post',postRouter);
app.use('/user',userRouter);

app.listen(8080);