var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/admin/scripttags', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer DUDFyw1uJpXtUIDX7mmeaH',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
        "shop_no": 4,
        "request": {
            "src": "http://shop4.connerstone21.cafe24.com/test.js",
        "display_location": [
            "PRODUCT_LIST",
            "PRODUCT_DETAIL"
        ],
            "exclude_path": ["/product/list.html", "/product/detail.html"],
            "skin_no": [18],
            "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo"
        }
    })
}).then(res=>res.json()).then(console.log);



// var request = require("request");

// var payload = {
//     "shop_no": 4,
//     "request": {
//         "src": "http://shop4.connerstone21.cafe24.com/test.js",
//         "display_location": [
//             "PRODUCT_LIST",
//             "PRODUCT_DETAIL"
//         ],
//         "exclude_path": [
//             "/product/list.html",
//             "/product/detail.html"
//         ],
//         "skin_no": [
//             18,
//         ],
//         "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo"
//     }
// };

// var options = { method: 'POST',
//   url: 'https://connerstone21.cafe24api.com/api/v2/admin/scripttags',
//   headers: {
//     'Authorization': "Bearer DUDFyw1uJpXtUIDX7mmeaH",
//     'Content-Type': "application/json",
//   },
//   body: payload,
//   json: true
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//   response.headers
//   console.log(body);
// });
