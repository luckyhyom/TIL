// var request = require("request");

// var payload = {
//     "shop_no": 1,
//     "request": {
//         "duplicated_item_check": "T",
//         "product_no": 16,
//         "basket_type": "A0000",
//         "prefaid_shipping_fee": "P",
//         "variants": [
//             {
//                 "quantity": 1,
//                 "variants_code": "P0000BJU000A",
//                 "options": [
//                     {
//                         "option_code": "O000000D",
//                         "value_no": 95
//                     },
//                     {
//                         "option_code": "O000000C",
//                         "value_no": 76
//                     }
//                 ]
//             },
//             {
//                 "quantity": 2,
//                 "variants_code": "P0000BJU000A",
//                 "options": [
//                     {
//                         "option_code": "O000000D",
//                         "value_no": 24
//                     },
//                     {
//                         "option_code": "O000000C",
//                         "value_no": 56
//                     }
//                 ]
//             }
//         ]
//     }
// };

// var options = { method: 'POST',
//   url: 'https://connerstone21.cafe24api.com/api/v2/carts',
//   headers: {
//     'Content-Type': "application/json",
//     'X-Cafe24-Client-Id': "Ay6xh4bHAhBrHHivdABG8A"
//   },
//   body: payload,
//   json: true
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
  
//   console.log(body);
// });



// List All products cart

var fetch = require('node-fetch');
var request = require("request");


var options = { method: 'GET',
url: 'https://connerstone21.cafe24api.com/api/v2/admin/products/16/carts',
headers: {
'Authorization': `Bearer rhD7BdclN9DusH0xV25P4B`,
'Content-Type': "application/json",
}
};

request(options, function (error, response, body) {
if (error) throw new Error(error);
console.log(body);
});

// fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=refresh_token&refresh_token=azKdBE1yMZOr0FQULzt58C'
// }).then((res) => res.json())
// .then((result) => {
//     console.log(result);
//     accessToken=result['access_token'];

//     var options = { method: 'GET',
//     url: 'https://connerstone21.cafe24api.com/api/v2/admin/products/16/carts',
//   headers: {
//     'Authorization': `Bearer I6IZkFnsFhnjkRWcyWMeeE`,
//     'Content-Type': "application/json",
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//   console.log(body);
// });


// });


var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/carts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Cafe24-Client-Id': 'Ay6xh4bHAhBrHHivdABG8A'
    },
    body: JSON.stringify({
        "shop_no": 1,
        "request": {
            "member_id":"connerstone21",
            "duplicated_item_check": "F",
            "product_no": 16,
            "basket_type": "A0000",
            "prefaid_shipping_fee": "P",
            "variants": [{
                "quantity": 6,
                "variants_code": "P000000Q000A",
                "options": [{
                    "option_code": "O000000E",
                    "value_no": 22
                }, {
                    "option_code": "O000000F",
                    "value_no": 31
                }, {
                    "option_code": "O000000G",
                    "value_no": 37
                }, {
                    "option_code": "O000000H",
                    "value_no": 55
                }, {
                    "option_code": "O000000I",
                    "value_no": 61
                }]
            }]
        }
    })
}).then(res=>res.json()).then(result=>console.log(result));