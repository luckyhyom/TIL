// 상품코드 동적 할당
let productNo = window.location.pathname.split("/")[3];

CAFE24API.init({
  client_id: "Ay6xh4bHAhBrHHivdABG8A",
});

// 옵션들[] -> 옵션값[]
let options = [];
// CAFE24API.get(`/api/v2/products/${productNo}/options`, function(err, res){
    CAFE24API.get(`/api/v2/products/19/options`, function (err, res) {
        // 옵션이 있다면 옵션 개수만큼 버튼 생성, 필요한 옵션값 속성에 할당.
        let options = res.options.options;
        if (!options) return;
      
        let optionType = res.options.option_type;
      
      
        options.forEach((option) => {
          // 옵션 선택창
          let div = document.createElement("div");
          div.style.background = "gray";
          div.style.width = "500px";
          div.style.height = "100px";
          div.style.marginBottom = "20px";
          div.style.overflowY = "scroll";
          console.log(option);
      
          let optionValue = option.option_value; // (Array)
      
          // 옵션들
          optionValue.forEach((value) => {
            let input = document.createElement("input");
            let optionCode = option.option_code;
            let valueNo = value.value_no; // key
            let additionalAmount = value.additional_amount; // 가격
            let optionText = value.option_text;
            console.log(optionValue);
            // optionType에 따라 type을 지정 해주거나, 임의로 지정
            input.setAttribute("type", "radio");
            // optionCode로 한 종류의 옵션을 묶어준다.
            input.setAttribute("name", optionCode);
            input.setAttribute("id",valueNo);
            input.setAttribute("value_no", valueNo);
            input.setAttribute("additional_amount", additionalAmount);
    

            input.addEventListener('click')
    
            // 라벨
            let label = document.createElement("label");
            label.setAttribute("for",valueNo);
            label.innerHTML = optionText;
            
            // <br>
            let br = document.createElement("br");
            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(br);
          });
      
          // 제목 아래에 추가
          document.querySelector(".name").appendChild(div);
        });
      });

// 옵션 가져오기
CAFE24API.get(`/api/v2/products/19/options`, function (err, res) {
  console.log(res);
});


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
      alert(' iPhone X 상품 수량3개가 상품이 자동으로 장바구니에 담겼습니다.');
  });
})(CAFE24API.init({
  client_id: 'Ay6xh4bHAhBrHHivdABG8A',
  // version: '2021-06-01'
}));





// 상품코드 동적 할당
// let productNo = window.location.pathname.split('/')[3];


// product 정보
(function(CAFE24API) { 
  // 상품코드 동적 할당
  CAFE24API.get('/api/v2/products/19', function (err, res) {
    console.log(res);
    //
  });
})(CAFE24API.init({
  client_id: 'Ay6xh4bHAhBrHHivdABG8A'
}));