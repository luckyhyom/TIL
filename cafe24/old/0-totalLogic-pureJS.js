/**
 * Cafe24 API Documents
 * https://developer.cafe24.com/docs/api/front/#create-a-carts
 * 
 * Cafe24 옵션을 연동형 옵션으로 생성해야함.
 */

CAFE24API.init({
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

// 옵션들[] -> 옵션값[]
let optionsOri = {};
let optionsArr = [];
let arr = [];
CAFE24API.get(`/api/v2/products/${productNo}/options`, function (err, res) {
  // CAFE24API.get(`/api/v2/products/19/options`, function (err, res) {
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
      // console.log(optionValue);
      // optionType에 따라 type을 지정 해주거나, 임의로 지정
      input.setAttribute("type", "radio");
      // optionCode로 한 종류의 옵션을 묶어준다.
      input.setAttribute("name", optionCode);
      input.setAttribute("id", valueNo);
      input.setAttribute("value_no", valueNo);
      input.setAttribute("additional_amount", additionalAmount);

      // 이벤트 부여
      input.addEventListener("click", () => {

        // option_code = optionCode.. -> 전역 변수에 담아서 cart Api 함수에서 할당해줄 코드 작성
        // let addOption = { option_code: optionCode, value_no: valueNo };

        // if (optionOri.indexOf(addOption) < 0) {
        //   optionsOri.push(addOption);
        // }

        // 동일한 option_code가 이미 존재한다면?
        // [{option_code:{option_code,value_no},option_code:{option_code,value_no}}]

        // key/value 형태로 변수에 담고, 카트에 담을때는 반복문을 이용해 배열로 만든다..
        let addOption = {
          optionCode: { option_code: optionCode, value_no: valueNo },
        };
        // **문자열을 이용해 키를 추가/검색 하기위해 obj[""] 대괄호가 존재한다.
        optionsOri[optionCode] = { option_code: optionCode, value_no: valueNo };

        // 같은 옵션코드를 가진 아이를 배출
        // optionOri.filter((option) => option.option_code === input.opionCode);

        // 같은 옵션코드를 가졌다면 변경

        console.log(optionsOri);
      });

      // 라벨
      let label = document.createElement("label");
      label.setAttribute("for", valueNo);
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

// 연동 옵션 장바구니 담기 코드, 임의로 생성한 mySubmit 버튼에 이벤트 생성
document.querySelector(".mySubmit").addEventListener("click", () => {
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
