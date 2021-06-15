// 상품목록

//var request = require("request");

// var options = { method: 'GET',
//   url: 'https://connerstone21.cafe24api.com/api/v2/products',
//   headers: {
//     'Content-Type': "application/json",
//     'X-Cafe24-Client-Id': "Ay6xh4bHAhBrHHivdABG8A"
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
  
//   console.log(body);
// });








// Access Token

// curl -X POST
// 'https://{mall_id}.cafe24api.com/api/v2/oauth/token'
// -H 'Authorization: Basic {base64_encode({client_id}:{client_Secret})}'
// -H 'Content-Type: application/x-www-form-urlencoded'
// -d 'grant_type=authorization_code'
// -d 'code={authorization_code}'
// -d 'redirect_uri={redirect_uri}'

// curl -X POST
// 'https://connerstone21.cafe24api.com/api/v2/oauth/token'
// -H 'Authorization: Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E'
// -H 'Content-Type: application/x-www-form-urlencoded'
// -d 'grant_type=authorization_code'
// -d 'code=8lAfqSI3E64E5rKhcTojpH'
// -d 'redirect_uri=https://connerstone21.cafe24.com'




// With fetch

var fetch = require('node-fetch');
var accessToken = ''; 
fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=authorization_code&code=vpzk8VunB1puTyX5eM0OfI&redirect_uri=https://connerstone21.cafe24.com'
}).then((res)=> res.json())
  .then((result) => {
    // console.log(result['access_token']);
    accessToken=result['access_token'];
    // console.log(result);

    // console.log(`${accessToken}`);
    // 상품옵션 리스트

    // curl -X GET \
    // 'https://connerstone21.cafe24api.com/api/v2/admin/products/16/options' \
    // -H 'Authorization: Bearer result['access_token']' \
    // -H 'Content-Type: application/json' \

    console.log(result);

    fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/16/options', {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        // 'X-Cafe24-Api-Version': '2021-06-01'
    }
    }).then((res)=> res.json())
    .then((result) => {
      // console.log(`accessToken : Bearer ${accessToken}`);
      // console.log(result);
      var productIndex = 0;
      var test = result['option']['options'][0]['option_value'][productIndex]['additional_amount'];
      // console.log('this!!',result['option']['options']);
      console.log('test!',test['additional_amount']);
    });

  });


// With request
// var request = require('request');

// var headers = {
//     'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
//     'Content-Type': 'application/x-www-form-urlencoded'
// };

// var dataString = 'grant_type=authorization_code&code=oC6UyFG0D1GoTJXYQPXbNC&redirect_uri=https://connerstone21.cafe24.com';

// var options = {
//     url: 'https://connerstone21.cafe24api.com/api/v2/oauth/token',
//     method: 'POST',
//     headers: headers,
//     body: dataString
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }else{
//       console.log(error);
//     }
// }

// request(options, callback);



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


// const fetch = require('node-fetch');

// const ripeEndpoint = 'https://connerstone21.cafe24api.com/api/v2/oauth/token'
// fetch(ripeEndpoint, {
//   method: 'POST',
//   headers: new fetch.Headers({
//     'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Access-Control-Allow-Origin': '*',
//     'grant_type':'authorization_code',
//     'code':'8lAfqSI3E64E5rKhcTojpH',
//     'redirect_uri':'https://connerstone21.cafe24.com'
//   }),
// }).then((res)=> res.json())
//   .then((result) => {
//     console.log(result);
//   });

  
