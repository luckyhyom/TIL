var fetch = require('node-fetch');

// fetch('https://{mall_id}.cafe24api.com/api/v2/oauth/token', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Basic {base64_encode({client_id}:{client_Secret})}',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=refresh_token&refresh_token={refresh_token}'
// });


// var fetch = require('node-fetch');

// fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=refresh_token&refresh_token=S8zeQtGuQyifuHq1wFesQH'
// }).then((res) => res.json())
//     .then((result) => {
//         console.log(result);
// });


//
//
// fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
//     method: 'POST',
//     headers: {
//         'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'grant_type=refresh_token&refresh_token=S8zeQtGuQyifuHq1wFesQH'
// }).then((res) => res.json())
// .then((result) => {
//     console.log(result);
// });


fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=refresh_token&refresh_token=azKdBE1yMZOr0FQULzt58C'
}).then((res) => res.json())
.then((result) => {
    console.log(result);
});