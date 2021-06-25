(function(CAFE24API) { 
    var data = {
      "shop_no": 3,
      "request": {
          "duplicated_item_check": "F",
          "product_no": 22,
          "basket_type": "A0000",
          "prefaid_shipping_fee": "P",
          "variants": [
              {
                  "quantity": 1,
                  "variants_code": "P000000W000A",
                  "options": [
                    //   {
                    //       "option_code": "O00000BA",
                    //       "value_no": 472
                    //   }
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