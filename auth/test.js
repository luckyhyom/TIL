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
    body: 'grant_type=authorization_code&code=ddXsxBM9DZfbjNOgpfM2vA&redirect_uri=https://connerstone21.cafe24.com'
}).then((res)=> res.json())
  .then((result) => {
    console.log(result);
    accessToken=result['access_token'];

    // 상품옵션 리스트
    // curl -X GET \
    // 'https://connerstone21.cafe24api.com/api/v2/admin/products/16/options' \
    // -H 'Authorization: Bearer result['access_token']' \
    // -H 'Content-Type: application/json' \
    fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/18/options', {
    headers: {
        // 'Authorization': `Bearer ${accessToken}`,
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
      console.log('productIndex',test['productIndex']);
      console.log('options:',result['option']['options'][0]);
      console.log('options:',result['option']['options'][1]);
      console.log('options:',result['option']['options'][2]);
      console.log('options:',result['option']['options'][3]);
    });


//     // 업데이트

// fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/16/options', {
//     method: 'POST',
//     headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "shop_no": 1,
//         "request": {
//             "has_option": "T",
//             "option_type": "T",
//             "option_list_type": "S",
//             "options": [{
//                 "option_name": "Color",
//                 "option_value": [{
//                     "option_image_file": "http://connerstone21.cafe24.com/web/upload/image_custom_615421761805558.gif",
//                     "option_color": "#000000",
//                     "option_text": "Black"
//                 }, {
//                     "option_image_file": "http://connerstone21.cafe24.com/web/upload/image_custom_615421761805551.gif",
//                     "option_color": "#007543",
//                     "option_text": "Red"
//                 }],
//                 "option_display_type": "P"
//             }],
//             "use_additional_option": "T",
//             "additional_options": [{
//                 "additional_option_name": "Pattern",
//                 "required_additional_option": "T",
//                 "additional_option_text_length": 20
//             }, {
//                 "additional_option_name": "Custom Option",
//                 "required_additional_option": "F",
//                 "additional_option_text_length": 10
//             }],
//             "use_attached_file_option": "T",
//             "attached_file_option": {
//                 "option_name": "Pattern Images",
//                 "required": "T",
//                 "size_limit": 3
//             }
//         }
//     })
// }).then((res)=> res.json())
// .then((result) => {
//   console.log('update?',result);
// });




//     fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/16/options', {
//     method: 'PUT',
//     headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       "shop_no": 1,
//       "product_no": 16,
//       "has_option": 'T',
//       "option_type": 'E',
//       "option_list_type": 'S',
//       "option_preset_code": 'S000000C',
//       "request": {
//           "option_list_type": "S",
//           "original_options": [{
//              "option_code": 'O000000E',
//              "option_name": 'S1',
//              "required_option": 'T',
//              "option_display_type": 'S',
//              "option_value": [
//                {
//                  "option_image_file": '',
//                  "option_link_image": '',
//                  "option_color": '',
//                  "option_text": 'Diamond | 0.3Ct',
//                  "value_no": 22,
//                  "additional_amount": '50000.00'
//                },
//                {
//                  "option_image_file": '',
//                  "option_link_image": '',
//                  "option_color": '',
//                  "option_text": 'Ruby | 1.3Ct',
//                  "value_no": 23,
//                  "additional_amount": '30000.00'
//                }
//              ]
//            }],
//           "options": [{
//              "option_code": 'O000000E',
//              "option_name": 'S1',
//              "required_option": 'T',
//              "option_display_type": 'S',
//              "option_value": [
//                {
//                  "option_image_file": '',
//                  "option_link_image": '',
//                  "option_color": '',
//                  "option_text": 'Diamond | 0.3Ct',
//                  "value_no": 22,
//                  "additional_amount": '88888.00'
//                },
//                {
//                  "option_image_file": '',
//                  "option_link_image": '',
//                  "option_color": '',
//                  "option_text": 'Ruby | 1.3Ct',
//                  "value_no": 23,
//                  "additional_amount": '30000.00'
//                }
//              ]
//            }],
//           "use_additional_option": "F",
//           "additional_options": [],
//           "use_attached_file_option": "F",
//           "attached_file_option": []
//       }
//   })
// }).then((res)=> res.json())
// .then((result) => {
//   console.log('update?',result);
// });

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






// 옵션 업데이트 하기
// var fetch = require('node-fetch');

// fetch('https://{mallid}.cafe24api.com/api/v2/admin/products/16/options', {
//     method: 'PUT',
//     headers: {
//         'Authorization': 'Bearer {access_token}',
//         'Content-Type': 'application/json',
//         'X-Cafe24-Api-Version': '{version}'
//     },
//     body: JSON.stringify({
      
//     })
// });

// var fetch = require('node-fetch');

// fetch('https://connerstone21.cafe24api.com/api/v2/admin/products/16/options', {
//     method: 'PUT',
//     headers: {
//         'Authorization': 'Bearer {access_token}',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         "shop_no": 1,
//         "request": {
//             "options": [{
//                 "option_name": "S1",
//                 "option_value": [
//                   {
//                     "option_image_file": '',
//                     "option_link_image": '',
//                     "option_color": '',
//                     "option_text": 'Diamond | 0.3Ct',
//                     "value_no": 22,
//                     "additional_amount": '50000.00'
//                   },
//                   {
//                     "option_image_file": '',
//                     "option_link_image": '',
//                     "option_color": '',
//                     "option_text": 'Ruby | 1.3Ct',
//                     "value_no": 23,
//                     "additional_amount": '30000.00'
//                   }
//                 ]
//             }],
//         }
//     })
// });








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

