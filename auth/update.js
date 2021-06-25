// 상품목록

// With fetch

var fetch = require('node-fetch');
var accessToken = ''; 
fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=authorization_code&code=rIJlyDYUN1gkUKPgR1UDPA&redirect_uri=https://connerstone21.cafe24.com'
}).then((res)=> res.json())
  .then((result) => {
    console.log(result);
    accessToken=result['access_token'];

    // 상품옵션 리스트
    // curl -X GET \
    // 'https://connerstone21.cafe24api.com/api/v2/admin/products/16/options' \
    // -H 'Authorization: Bearer result['access_token']' \
    // -H 'Content-Type: application/json' \
    fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/16/options', {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    }
    }).then((res)=> res.json())
    .then((result) => {

      // 한가지 상품안에 들어있는 옵션의 리스트
      console.log(result);

      // 옵션 가격 추출
      var productIndex = 0;
      var test = result['option']['options'][0]['option_value'][productIndex]['additional_amount'];
      console.log('test!',test);
    });



});


