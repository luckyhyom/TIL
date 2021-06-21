var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/19/options', {
    headers: {
        'Authorization': `Bearer Q4zmwDtyHNivbCP0KfgR6D`,
        'Content-Type': 'application/json',
    }
    }).then((res)=> res.json())
    .then((result) => {

      // 한가지 상품안에 들어있는 옵션의 리스트
      console.log(result);

      // 옵션 가격 추출
      var productIndex = 0;
      var test = result['option']['options'][0]['option_value'];
      console.log('test!',test);
      console.log('options:',result['option']['options']);
      console.log('options:',result['option']['options'][0]);
      console.log('options:',result['option']['options'][1]);
      console.log('options:',result['option']['options'][2]);
      console.log('options:',result['option']['options'][3]);
    });



//     var fetch = require('node-fetch');

// fetch('https://connerstone21.cafe24api.com/api/v2/products/19/options', {
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Cafe24-Client-Id': 'Ay6xh4bHAhBrHHivdABG8A'
//     }
// });



// CAFE24API..
// CAFE24API.init({
//     client_id : 'Ay6xh4bHAhBrHHivdABG8A',
// });

// CAFE24API.get('/api/v2/products/19/options', function(err, res){
//     console.log(res);
// });