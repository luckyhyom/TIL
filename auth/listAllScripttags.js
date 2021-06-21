const fetch = require('node-fetch');

fetch("https://connerstone21.cafe24api.com/api/v2/admin/scripttags", {
  headers: {
    Authorization: "Bearer ISpVSzMwHZPlWJNzAfI7ZF",
    "Content-Type": "application/json",
}
}).then(res=>res.json()).then(result=>console.log(result));