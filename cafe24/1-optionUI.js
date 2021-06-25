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
      input.setAttribute("id", valueNo);
      input.setAttribute("value_no", valueNo);
      input.setAttribute("additional_amount", additionalAmount);

      // 이벤트 부여
      input.addEventListener('click',()=>{
        console.log(`${valueNo} is clicked`);
        
        // option_code = optionCode.. -> 전역 변수에 담아서 cart Api 함수에서 할당해줄 코드 작성
         
      })

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


// CAFE24API.get(`/api/v2/products/19/options`, function (err, res) {console.log(res)});