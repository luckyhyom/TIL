const fetch = require('node-fetch');

fetch("https://connerstone21.cafe24api.com/api/v2/admin/scripttags", {
  headers: {
    Authorization: "Bearer DUDFyw1uJpXtUIDX7mmeaH",
    "Content-Type": "application/json",
}
}).then(res=>res.json()).then(result=>console.log(result));
