// index.html에서 fetch로 사용 가능합니다.

import express from 'express';
import fs from 'fs';
import request from 'request';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const clientHeader = {
  'Content-Type': "application/json",
  'X-Cafe24-Client-Id': "Ay6xh4bHAhBrHHivdABG8A" // 개발자 페이지에서 생성한 App의 키
};

function exeRequest(res,options){
  request(options, function (error, response, body) {
    res.setHeader('Content-Type','application/json');
    res.send(body);
  });
}


// *브라우저에서 31번상품 옵션 불러오기
// fetch('http://127.0.0.1/option/31').then(res=>res.json()).then(console.log);
app.get('/option/:productNo',(req,res)=>{

  const productNo = req.params.productNo;

  var options = {
    method: 'GET',
    url: `https://connerstone21.cafe24api.com/api/v2/products/${productNo}/options?shop_no=4`, // 31번
    headers: clientHeader
  };

  exeRequest(res,options);
});


// http://127.0.0.1/product/31
app.get('/product/:productNo',(req,res)=>{

  const productNo = req.params.productNo;

  var options = {
    method: 'GET',
    url: `https://connerstone21.cafe24api.com/api/v2/productsdetail/${productNo}?shop_no=4`, // 31번
    headers: clientHeader
  };

  request(options, function (error, response, body) {
    const product = JSON.parse(body).productsdetail;
    const no = product.product_no;
    const name = product.product_name;
    const price = Math.floor(product.price);
    const image = product.detail_image;
    const additionalImages = product.additional_images;

    
    const obj = {no,name,price,image,additionalImages};
    res.setHeader('Content-Type','application/json');
    res.send(obj);

    console.log(product);
  });
  
});

app.listen(80);