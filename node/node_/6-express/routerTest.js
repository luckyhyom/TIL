import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
const app = express();

app.use(express.json());
app.use('/post',postRouter);
app.use('/user',userRouter);

app.listen(8080);