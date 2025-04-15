// 적용하기 버튼이 클릭 되었을 때
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function(){

  // input 요소들을 모두 얻어오기
  const boxWidth = document.querySelector("#box-width"); //너비
  const boxHeight = document.querySelector("#box-height"); // 높이
  const fs = document.querySelector("#fs"); // 폰트 크기

  const fw = document.querySelector("[name='fw']:checked");

  const fontColor = document.querySelector("#box-font-color"); // 글씨 색
  const bgColor = document.querySelector("#box-bg-color"); // 배경색

  const row = document.querySelector("[name='align-row']:checked");
  const col = document.querySelector("[name='align-col:checked]");

  const content = document.querySelector("#content"); //작성글

  const box = document.querySelector("#box"); // 박스 요소 (대상)

  // input 에 작성 된 값에 따라 #box 에 스타일 추가
  
  //if(boxWidth.value.trim().length > 0)
  box.style.width = boxWidth.value + "px";
  box.style.height = boxHeight.value + "px";
  box.style.frontSize = fs.value + "px";
  
  // if(fw != null){}
  box.style.fontWeight = fw.value;

  box.style.color = fontColor.value;
  box.style.backhroundColor = bgColor.value;

  box.style.justifyContent = row.value;
  box.style.alignItems = col.value;

  box.innerText = content.value;

});
