jQuery3_6_0("<div class='customOption'></div>").appendTo('.totalPrice');
jQuery3_6_0("<div class='stone_color'></div>").appendTo('div.customOption');
jQuery3_6_0("<div class='stone_item'></div>").appendTo('div.customOption');
jQuery3_6_0("<div class='metal_color'></div>").appendTo('div.customOption');
jQuery3_6_0("<div class='metal_item'></div>").appendTo('div.customOption');

CAFE24API.init({
  // Cafe24 개발자센터 myApp에서 id값 참조
  client_id: "Ay6xh4bHAhBrHHivdABG8A",
});

// 상품번호 동적 할당
let URLSearch = new URLSearchParams(window.location.search).get("product_no");
let productNo = window.location.pathname.split("/")[3] || URLSearch;

// 상품코드
let productCode = "";

// product 정보
(function (CAFE24API) {
  CAFE24API.get(`/api/v2/products/${productNo}`, function (err, res) {
    // 상품코드 동적 할당
    productCode = res.product.product_code;
  });
})(
  CAFE24API.init({
    client_id: "Ay6xh4bHAhBrHHivdABG8A",
  })
);

// 선택된 옵션
let optionsOri = {};
let selectedOptions = [];

CAFE24API.get(`/api/v2/products/${productNo}/options`, function (err, res) {
  // 옵션이 있다면 옵션 개수만큼 버튼 생성, 필요한 옵션값 속성에 할당.
  let options = res.options.options;
  if (!options) return;
    
  // 여기 있으면 왜 하나만 생성되는거지? 추가는 아래 반복문에서 해주는데
  // let input = jQuery3_6_0("<input>");
  // let label = jQuery3_6_0("<label>");


  options.forEach((option) => {

    
  let input = jQuery3_6_0("<input>");
  let label = jQuery3_6_0("<label>");

    let optionName = option.option_name;

    if(optionName.includes('stone')){ // 


      if(optionName.includes('item')){ // stone_red_item_ruby/.... 아이템이라면
        console.log("includes optionName, item",optionName);

        let splited = optionName.split('_');
        let stoneColor = splited[0]+'_'+splited[1]; // stone_red가 됨.

        input.attr({
          "type":"radio",
          "name":stoneColor,
          "id":optionName
        });

        label.attr({
          "for":optionName
        }).text(optionName);


        // 만약 해당 컬러가 담길 요소가 없다면
        if(jQuery3_6_0(`div.stone_item > div.${stoneColor}`).length===0){
          jQuery3_6_0(`<div class=${stoneColor}></div>`).appendTo('div.stone_item');
        }
        
        jQuery3_6_0(`div.stone_item > div.${stoneColor}`).append(input,label);
        

      }else{ // stone_red 컬러라면
        // div.stone_color로 들어가고 id는 'stone_color'
        
      console.log("includes optionName, not item",optionName);
        input.attr({
          "type":"radio",
          "name":"stone_color",
          "id":optionName,
        })
        .appendTo('div.stone_color');

        label.attr({"for":optionName})
        .text(optionName).appendTo('div.stone_color');
      }
      
    }else if(optionName.includes('metal')){
      if(optionName.includes('item')){

      }else{

      }
    }



    // // 옵션 선택창
    // // 안보이게 설정 후, 선택된 조건에 따라 해당 옵션을 보여준다.


    // let optionValue = option.option_value; // (Array)

    // // 옵션들
    // optionValue.forEach((value) => {
    //   let input = jQuery3_6_0("<input>");

    //   let optionCode = option.option_code;
    //   let valueNo = value.value_no; // key
    //   let additionalAmount = value.additional_amount; // 가격
    //   let optionText = value.option_text;

    //   // optionType에 따라 type을 지정 해주거나, 임의로 지정
    //   // optionCode로 한 종류의 옵션을 묶어준다.

    //   input.attr({
    //     type: "radio",
    //     name: optionCode,
    //     id: valueNo,
    //     value_no: valueNo,
    //     additional_amount: additionalAmount,
    //     optionName: optionName,
    //     optionText: optionText,
    //   });

    //   // 이벤트 생성
    //   jQuery3_6_0(input).on("click", () => {
    //     // 전역 변수에 담아서 cart Api 함수에서 할당해줄 코드 작성

    //     // 동일한 option_code가 이미 존재한다면?
    //     // key/value 형태로 변수에 담고, 카트에 담을때는 반복문을 이용해 배열로 만든다.

    //     optionsOri[optionCode] = {
    //       option_code: optionCode,
    //       value_no: valueNo,
    //     };

    //     // 메탈의 white인지 스톤의 white인지 구별해야함.


    //     // 하위옵션이면 리턴 ("_" 포함되어있으면 하위옵션) 
    //     if (optionName.includes("_")) return;

    //     if (optionName.includes("Metal")) {
    //       console.log('metal on');
    //       jQuery3_6_0(`div[optionName*=Metal]`).filter(`div[optionName*=_]`).hide();
    //     } else if (optionName.includes("stone")) {
    //       console.log('stone on');
    //       jQuery3_6_0(`div[optionName*=stone]`).filter(`div[optionName*=_]`).hide();
    //     }else{
    //       console.log('else..');
    //     }

    //     console.log('event works');

    //     jQuery3_6_0(`div[optionName=${optionName}_]`).show();

    //   });

    //   // 라벨
    //   let label = jQuery3_6_0("<label></label>");
    //   label.attr("for", valueNo);
    //   label.html(optionText);

    //   // <br>
    //   let br = jQuery3_6_0("<br>");
    //   div.append(input, label, br);
    // });

    // // 제목 아래에 추가
    // jQuery3_6_0(".totalPrice").append(div);
  });
});

// 연동 옵션 장바구니 담기 코드, 임의로 생성한 mySubmit 버튼에 이벤트 생성
jQuery3_6_0(".mySubmit").on("click", () => {
  // 객체를 배열로 만들어서
  let arr = Object.entries(optionsOri);
  arr.forEach((a) => {
    // index[1]에 있는 option정보를 selectedOptions에 넣는다.
    selectedOptions.push(a[1]);
  });

  createCart(CAFE24API, productNo, productCode, selectedOptions);
});

function createCart(CAFE24API, productNo, productCode, selectedOptions) {
  var data = {
    shop_no: 4,
    request: {
      duplicated_item_check: "F",
      product_no: productNo,
      basket_type: "A0000",
      prefaid_shipping_fee: "P",
      variants: [
        {
          quantity: 1,
          // 상품코드+000A
          variants_code: productCode + "000A",
          options: selectedOptions,
        },
      ],
    },
  };
  CAFE24API.post("/api/v2/carts", data, function (err, res) {
    console.log(res);
    alert("장바구니에 담겼습니다.");
  });
}

//옵션조회
//CAFE24API.get(`/api/v2/products/19/options`, function (err, res) {console.log(res)});
