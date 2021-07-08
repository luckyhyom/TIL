var fetch = require('node-fetch');
var accessToken = ''; 
fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=authorization_code&code=f1uS9JDnAqHbL1nMcCgeUE&redirect_uri=https://connerstone21.cafe24.com'
}).then((res)=> res.json())
  .then((result) => {
    console.log(result);
    accessToken=result['access_token'];

    console.log('accessToken',accessToken);
    fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/18/options', {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    }
    }).then((res)=> res.json())
    .then((result) => {

      // 한가지 상품안에 들어있는 옵션의 리스트
      console.log('result!',result);

      // 옵션 가격 추출
      // var productIndex = 0;
      // var test = result['option']['options'][0]['option_value'];
      // console.log('test!',test);
      // console.log('productIndex',test['productIndex']);
      // console.log('options:',result['option']['options'][0]);
      // console.log('options:',result['option']['options'][1]);
      // console.log('options:',result['option']['options'][2]);
      // console.log('options:',result['option']['options'][3]);
    });

});

// try to get a access token with fetch

// const ripeEndpoint = 'http://v2.api.iphub.info/ip/8.8.8.8'
// fetch(ripeEndpoint, {
//   method: 'POST',
//   headers: new Headers({
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'multipart/form-data',
//     'X-Key': myApiKey
//   }),
// })
