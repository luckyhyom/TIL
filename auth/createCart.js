// 옵션을 없앤 후 이 코드 동작
(function(CAFE24API) {
    var data = {
        "shop_no": 3,
        "request": {
            "duplicated_item_check": "T",
            "product_no": 19,
            "basket_type": "A0000",
            "prefaid_shipping_fee": "P",
            "variants": [{
                "quantity": 3,
                "variants_code": "P000000T",
            }]
        }
    };
    CAFE24API.post('/api/v2/carts', data, function(err, res) {
        console.log(res);
        alert(' iPhone X 상품 수량3개가 상품이 자동으로 장바구니에 담겼습니다.');
    });
})(CAFE24API.init({
    client_id: 'Ay6xh4bHAhBrHHivdABG8A',
    // version: '2021-06-01'
}));



// 옵션을 없앴지만 이 코드도 동작함.
(function(CAFE24API) {
    var data = {
        "shop_no": 3,
        "request": {
            "duplicated_item_check": "T",
            "product_no": "19",
            "basket_type": "A0000",
            "prefaid_shipping_fee": "P",
            "variants": [{
                "quantity": 3,
                "variants_code": "P000000T000A",
                "options": [{
                    // 옵션관리에서 확인가능
                    "option_code": "O000000S",
                    "value_no": 77
                },{
                    "option_code": "O000000R",
                    "value_no": 168
                }]
            }]
        }
    };
    CAFE24API.post('/api/v2/carts', data, function(err, res) {
        console.log(res);
        alert(' iPhone X 상품 수량3개가 상품이 자동으로 장바구니에 담겼습니다.');
    });
})(CAFE24API.init({
    client_id: 'Ay6xh4bHAhBrHHivdABG8A',
    // version: '2021-06-01'
}));