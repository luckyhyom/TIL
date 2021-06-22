// Jquery
// $() 함수에 전달되는 인수는 반드시 따옴표("")를 사용한 문자열 형태로 전달되어야 합니다.

//제이쿼리 낮은 버전에서 on() 메소드가 없음. noConflict 사용해야하나?
// 1.4.4에서는 click안에 콜백함수를 넣지 않으면 클릭이 되고 그렇지 않으면 이벤트생성이 된다.

// 제이쿼리 유무 확인
// if (typeof jQuery == 'undefined') {
//   alert("없음");
//   }else{
//   alert("있음");
// }

// 제이쿼리 최신버전 하나 더 추가 후, 중복 안되게끔 conflict 이용.
// <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
window.jQuery1_11_2 = jQuery.noConflict(true);

// 최신버전
// jQuery1_11_2(".mySubmit").on("click", () => {
//   alert("test1234");
// });

// 사용하던 버전
// $(".name").click(() => {
//   alert("$");
// });

/**
 * Cafe24 API Documents
 * https://developer.cafe24.com/docs/api/front/#create-a-carts
 *
 * Cafe24 옵션을 연동형 옵션으로 생성해야함.
 */
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
    // 옵션 선택창
    // let div = document.createElement("div");
    let div = jQuery1_11_2("<div></div>")
    .css("background", "gray")
    .css("width", "500px")
    .css("height", "100px")
    .css("marginBottom", "20px")
    .css("overflowY", "scroll")
    console.log(option);

    let optionValue = option.option_value; // (Array)

    // 옵션들
    optionValue.forEach((value) => {
      // let input = document.createElement("input");

      let input = jQuery1_11_2("<input>");

      let optionCode = option.option_code;
      let valueNo = value.value_no; // key
      let additionalAmount = value.additional_amount; // 가격
      let optionText = value.option_text;
      // console.log(optionValue);

      // optionType에 따라 type을 지정 해주거나, 임의로 지정
      // optionCode로 한 종류의 옵션을 묶어준다.
      input.attr("type", "radio")
      .attr("name", optionCode)
      .attr("id", valueNo)
      .attr("value_no", valueNo)
      .attr("additional_amount", additionalAmount);

      // 이벤트 부여

      jQuery1_11_2(input).on("click", () => {
        // option_code = optionCode.. -> 전역 변수에 담아서 cart Api 함수에서 할당해줄 코드 작성

        // 동일한 option_code가 이미 존재한다면?
        // key/value 형태로 변수에 담고, 카트에 담을때는 반복문을 이용해 배열로 만든다.

        optionsOri[optionCode] = {
          option_code: optionCode,
          value_no: valueNo,
        };

        console.log(optionsOri);
      });

      // 라벨
      let label = jQuery1_11_2("<label></label>")
      label.attr("for", valueNo);
      label.html(optionText);

      // <br>
      let br = jQuery1_11_2("<br>");
      div.append(input);
      div.append(label);
      div.append(br);
    });

    // 제목 아래에 추가
    // document.querySelector(".name").appendChild(div);
    jQuery1_11_2(".name:first").append(div);
  });
});

// 연동 옵션 장바구니 담기 코드, 임의로 생성한 mySubmit 버튼에 이벤트 생성
// document.querySelector(".mySubmit").addEventListener("click", () => {
//   // 객체를 배열로 만들어서
//   arr = Object.entries(optionsOri);
//   arr.forEach((a) => {
//     // index[1]에 있는 option정보를 optionsArr에 넣는다.
//     optionsArr.push(a[1]);
//   });

//   createCart(CAFE24API, productNo, productCode, optionsArr);
// });

jQuery1_11_2(".mySubmit").on("click", () => {
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
