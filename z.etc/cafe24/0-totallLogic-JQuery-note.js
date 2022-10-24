CAFE24API.init({
  // Cafe24 개발자센터 myApp에서 id값 참조
  client_id: "Ay6xh4bHAhBrHHivdABG8A",
});

// 상품번호 동적 할당
let productNo = window.location.pathname.split("/")[3];

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

let optionsOri = {};
let optionsArr = [];
let arr = [];
CAFE24API.get(`/api/v2/products/${productNo}/options`, function (err, res) {
  // 옵션이 있다면 옵션 개수만큼 버튼 생성, 필요한 옵션값 속성에 할당.
  let options = res.options.options;
  if (!options) return;

  let optionType = res.options.option_type;

  options.forEach((option) => {


    let optionName = option.option_name;

    let div = jQuery3_6_0("<div></div>")
    .css("background", "gray")
    .css("width", "500px")
    .css("height", "100px")
    .css("marginBottom", "20px")
    .css("overflowY", "scroll")
    .attr("optionName",optionName);



    // 옵션 선택창
    // 안보이게 설정 후, 선택된 조건에 따라 해당 옵션을 보여준다.
    switch (optionName) {
      case "whiteStone":
      case "redStone":
      case "blueStone":
      case "blackStone":
      case "whiteMetal":
      case "YellowMetal":
      case "roseMetal":
        div
        .css("display","none");
        break;
      default:
        break;
    }

    let optionValue = option.option_value; // (Array)

    // 옵션들
    optionValue.forEach((value) => {

      let input = jQuery3_6_0("<input>");

      let optionCode = option.option_code;
      let valueNo = value.value_no; // key
      let additionalAmount = value.additional_amount; // 가격
      let optionText = value.option_text;

      // optionType에 따라 type을 지정 해주거나, 임의로 지정
      // optionCode로 한 종류의 옵션을 묶어준다.
      input.attr("type", "radio")
      .attr("name", optionCode)
      .attr("id", valueNo)
      .attr("value_no", valueNo)
      .attr("additional_amount", additionalAmount)
      .attr("optionName",optionName)
      .attr("optionText",optionText);

      // 이벤트 생성
      jQuery3_6_0(input).on("click", () => {
        // option_code = optionCode.. -> 전역 변수에 담아서 cart Api 함수에서 할당해줄 코드 작성

        // 동일한 option_code가 이미 존재한다면?
        // key/value 형태로 변수에 담고, 카트에 담을때는 반복문을 이용해 배열로 만든다.

        optionsOri[optionCode] = {
          option_code: optionCode,
          value_no: valueNo,
        };

        // 메탈의 white인지 스톤의 white인지 구별해야함.
        switch (optionName) {
          case "Stone Color":
            console.log("switch");
            console.log("?",optionText);
            switch (optionText) {
              case "White":
                jQuery3_6_0("div[optionName$=Stone]").css("display","none");
                jQuery3_6_0("div[optionName=whiteStone]")
                .css("display","block");

                break;
              case "Red":
                jQuery3_6_0("div[optionName$=Stone]").css("display","none");
                jQuery3_6_0("div[optionName=redStone]")
                .css("display","block");
                break;
              case "Blue":
                jQuery3_6_0("div[optionName$=Stone]").css("display","none");
                jQuery3_6_0("div[optionName=blueStone]")
                .css("display","block");
                break;
              case "Black":
                jQuery3_6_0("div[optionName$=Stone]").css("display","none");
                jQuery3_6_0("div[optionName=blackStone]")
                .css("display","block");
                break;
              default:
                break;
            }
            break;
        
          case "Metal Color":
            switch (optionText) {
              case "Yellow":
                jQuery3_6_0("div[optionName$=Metal]").css("display","none");
                jQuery3_6_0("div[optionName=YellowMetal]")
                .css("display","block");
                break;
              case "Rose":
                jQuery3_6_0("div[optionName$=Metal]").css("display","none");
                jQuery3_6_0("div[optionName=roseMetal]")
                .css("display","block");
                break;
              case "White":
                jQuery3_6_0("div[optionName$=Metal]").css("display","none");
                jQuery3_6_0("div[optionName=whiteMetal]")
                .css("display","block");
                break;
              default:
                break;
            }
            break;
        
          default:
            break;
        }

        console.log(optionsOri);
      });

      // 라벨
      let label = jQuery3_6_0("<label></label>")
      label.attr("for", valueNo);
      label.html(optionText);

      // <br>
      let br = jQuery3_6_0("<br>");
      div.append(input);
      div.append(label);
      div.append(br);
    });

    // 제목 아래에 추가
    // document.querySelector(".name").appendChild(div);
    jQuery3_6_0(".name:first").append(div);
  });
});

// 연동 옵션 장바구니 담기 코드, 임의로 생성한 mySubmit 버튼에 이벤트 생성
jQuery3_6_0(".mySubmit").on("click", () => {
  // 객체를 배열로 만들어서
  arr = Object.entries(optionsOri);
  arr.forEach((a) => {
    // index[1]에 있는 option정보를 optionsArr에 넣는다.
    optionsArr.push(a[1]);
  });

  createCart(CAFE24API, productNo, productCode, optionsArr);
});

function createCart(CAFE24API, productNo, productCode, optionsArr) {
  var data = {
    shop_no: 3,
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
          options: optionsArr,
        },
      ],
    },
  };
  CAFE24API.post("/api/v2/carts", data, function (err, res) {
    console.log(res);
    alert("장바구니에 담겼습니다.");
  });
}


//CAFE24API.get(`/api/v2/products/21/options`, function (err, res) {console.log(res)});