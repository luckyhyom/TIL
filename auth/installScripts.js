var fetch = require('node-fetch');

fetch('https://connerstone21.cafe24api.com/api/v2/admin/scripttags', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer Q4zmwDtyHNivbCP0KfgR6D',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "shop_no": 1,
        "request": {
            "src": "https://shop3.connerstone21.cafe24.com/cafetest/js/front_card_add.js",
            "display_location": ["PRODUCT_LIST", "PRODUCT_DETAIL"],
            "exclude_path": ["/product/list.html", "/product/detail.html"],
            "skin_no": [3, 4],
            "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo"
        }
    })
}).then(res=>res.json()).then(console.log);