
// 연동 옵션 장바구니 담기 코드
(function(CAFE24API) {
    var data = {
        "shop_no": 3,
        "request": {
            "duplicated_item_check": "F",
            "product_no": 19,
            "basket_type": "A0000",
            "prefaid_shipping_fee": "P",
            "variants": [{
                "quantity": 3,
                // 상품코드+000A
                "variants_code": "P000000T000A",
                "options": [{
                    // 옵션관리에서 확인가능
                    "option_code": "O000000I",
                    "value_no": 68
                }]
            }]
        }
    };
    CAFE24API.post('/api/v2/carts', data, function(err, res) {
        console.log(res);
        alert('장바구니에 담겼습니다.');
    });
})(CAFE24API.init({
    client_id: 'Ay6xh4bHAhBrHHivdABG8A',
    // version: '2021-06-01'
}));