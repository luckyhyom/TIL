
// hosts파일 변경해서 시도해본 파일입니다. 실패했습니다.
// shop4의 IP : 14.128.149.182:80
// API사용시 127.0.0.1:80 으로 요청이 들어갑니다.

// *떠오르는 방안
// 1) CAFE24API의 cors에 로컬 주소를 등록
// 2) express의 IP를 shop4의 IP로 똑같이 설정
// 3) ~cafe24.com으로 dns 설정후 스크립트 설치하기

import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  fs.createReadStream('./shop4의html복붙.html').pipe(res);
});

app.listen(80);