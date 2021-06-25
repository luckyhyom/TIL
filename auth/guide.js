// 브라우저에서 cafe24api 사용 하는 법.

var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/products/count', {
    headers: {
        'Content-Type': 'application/json',
        'X-Cafe24-Client-Id': 'Ay6xh4bHAhBrHHivdABG8A'
    }
}).then(res=>res.json()).then(console.log);

// 이 코드는 브라우저에서

CAFE24API.init({
    client_id : 'Ay6xh4bHAhBrHHivdABG8A',
});

CAFE24API.get('/api/v2/products/count', function(err, res){
    console.log(res);
});