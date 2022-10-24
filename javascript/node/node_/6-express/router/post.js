import express from 'express'
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(201).send('get: /post');
})
router.post('/',(req,res)=>{
    res.status(201).send('post: /post');
})
router.get('/',(req,res)=>{
    res.sendStatus(404);
})
router.get('/',(req,res)=>{
    res.sendStatus(404);
})

export default router;