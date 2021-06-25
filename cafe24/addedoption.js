

(function(CAFE24API) { 
    var data = {
      "shop_no": 3,
      "request": {
          "duplicated_item_check": "T",
          "product_no": 22,
          "basket_type": "A0000",
          "prefaid_shipping_fee": "P",
          "variants": [
              {
                  "quantity": 1,
                  "variants_code": "P000000W000A",
                  "options": [
                      {
                          "option_code": "O00000BA",
                          "value_no": 472
                      }
                  ],
                  "additional_option_values": [
                      {
                          "name":"인그레이빙",
                          "info": "인그레이빙",
                          "key": "item_option_add",
                          "type": "text",
                          "value": "밸류"
                      }
                  ]
              }
          ]
      }
  };
  
    CAFE24API.post('/api/v2/carts', data, function (err, res) {
      console.log(res);
    });
  })(CAFE24API.init({
    version : '2021-06-01',
    client_id: 'Ay6xh4bHAhBrHHivdABG8A'
  }));



//   // 이걸로 key값 찾음
//   CAFE24API.getCartItemList(function(err, res) {
//     if (err) {
//         // 오류 발생시 Error 개체입니다.
//         // name, message 속성을 확인할 수 있습니다.
//         // res 개체를 통해 상세한 오류메세지 확인이 가능합니다.
//     } else {
//      console.log(res);   // res 개체를 통해 응답 메세지를 확인할 수 있습니다.
//     }
// });


// 추가입력 넣었을때 정상적으로 되는지

(function(CAFE24API) { 
    var data = {
      "shop_no": 3,
      "request": {
          "duplicated_item_check": "F",
          "product_no": 19,
          "basket_type": "A0000",
          "prefaid_shipping_fee": "P",
          "variants": [
              {
                  "quantity": 1,
                  "variants_code": "P000000T000A",
                  "options": [
                      {
                          "option_code": "O00000BB",
                          "value_no": 495
                      },{
                          "option_code": "O00000BA",
                          "value_no": 472
                      },{
                          "option_code": "O000000Z",
                          "value_no": 462
                      },{
                          "option_code": "O000000Y",
                          "value_no": 446
                      },
                  ],
                  "additional_option_values": [
                      {
                          "key": "item_option_add",
                          "type": "text",
                          "name": "인그레이빙",
                          "value": "밸류"
                      }
                  ]
              }
          ]
      }
  };
  
    CAFE24API.post('/api/v2/carts', data, function (err, res) {
      console.log(res);
    });
  })(CAFE24API.init({
    client_id: 'Ay6xh4bHAhBrHHivdABG8A'
  }));