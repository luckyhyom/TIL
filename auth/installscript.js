var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/admin/scripttags', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 1VYyvLeEZi2CTe7inIj0KG',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
        "shop_no": 3,
        "request": {
            "src": "https://shop3.connerstone21.cafe24.com/front-test.js",
            "display_location": ["all"],
            // "exclude_path": ["/product/list.html", "/product/detail.html"],
            "skin_no": [14],
            "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo"
        }
    })
}).then(res=>res.json()).then(console.log);