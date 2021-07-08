var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/oauth/token', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic QXk2eGg0YkhBaEJySEhpdmRBQkc4QTpFd3llNDFDemN5YlczalhMTXpadk5E',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=refresh_token&refresh_token=6NksZ7RKGFxgymtHpYSEXD'
}).then((res) => res.json())
.then((result) => {
    console.log(result);
});