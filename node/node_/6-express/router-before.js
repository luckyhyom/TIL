import express from 'express'
import newsRouter from './router/post'
const app = express();
app.use(express.json());

// way 1 : normal
// app.get('/posts',(req,res)=>{
//     res.status(201).send('good')
// })

// way 2 : chaining
app
.route('/posts')
.get((req,res,next)=>{
    res.send('route get!');
}).post((req,res)=>{
    res.send('route post!')
});

app.route('/user')
.get((req,res,next)=>{
    res.send('this is user`s')
})


//way 3: module.. 모듈로 만든다. 가독성 up
app.use('/news',newsRouter);

app.listen(8080);