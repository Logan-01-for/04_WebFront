// transform translate java script로

// 방향 키 이벤트 감지
document.addEventListener("keydown", function(event) {

  // 이미지 요소를 선택합니다.
const image = document.querySelector("#bomberman"); // 새로운 이미지 요소를 생성

  const moveDistance = 10; // 한 번에 이동할 거리 (픽셀)

  // 방향 키에 따라 이미지 이동
  switch (event.key) {
    case "ArrowUp": // 위쪽 화살표
      positionY -= moveDistance;
      break;
    case "ArrowDown": // 아래쪽 화살표
      positionY += moveDistance;
      break;
    case "ArrowLeft": // 왼쪽 화살표
      positionX -= moveDistance;
      break;
    case "ArrowRight": // 오른쪽 화살표
      positionX += moveDistance;
      break;
  }


//  x라는 키를 누르면 box에 innerHTML += <img 폭탄이미지>
// box.innerHTML +=.. 을 실행하는 과정에서 dom이 리렌더링됨.
// 기존에 bomberman을 가리키던 const bomberman = document.querySelecto("#bomberman")
// 더이상 유효하지 않은 변수가 됨. 

// 폭탄 생성
