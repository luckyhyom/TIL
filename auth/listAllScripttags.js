const fetch = require('node-fetch');

fetch("https://connerstone21.cafe24api.com/api/v2/admin/scripttags", {
  headers: {
    Authorization: "Bearer 1VYyvLeEZi2CTe7inIj0KG",
    "Content-Type": "application/json",
}
}).then(res=>res.json()).then(result=>console.log(result));

// // 옵션조회
// fetch('https://connerstone21.cafe24api.com/api/v2/products/19/options', {
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Cafe24-Client-Id': 'Ay6xh4bHAhBrHHivdABG8A'
//     }
// }).then(res=>res.json()).then(result=>console.log(result));

