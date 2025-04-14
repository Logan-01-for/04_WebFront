function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // 간단한 검증 예시 (실제로는 백엔드랑 연결해야 함)
    if (username === "admin" && password === "1234") {
      message.style.color = "green";
      message.innerText = "로그인 성공!";
    } else {
      message.style.color = "red";
      message.innerText = "아이디 또는 비밀번호가 잘못되었습니다.";
    }
  }
  