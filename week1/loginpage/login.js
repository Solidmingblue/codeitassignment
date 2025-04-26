



  // querySelector로 .eyes 클래스 가져오기
  const eyes = document.querySelector('.eyes');

  // .input_wrap으로 감싸고 active클래스 추가 제거 해서 상태 바꾸기기 (if에 추가, else에 제거)
  const inputWrap = document.querySelector('.input_wrap');
  // 비밀번호 입력창 <input id="password" type="password"> 요소를 가져오는 코드드
  const passwordInput = document.getElementById('password');
  // <i> 찾는 코드, 눈 모양(fa-eye) 또는 가려진 눈(fa-eye-slash)을 이 요소에 class로 지정
  const eyeIcon = eyes.querySelector('i');


  eyes.addEventListener('click', function () {
    //.input_wrap 요소에 active 클래스를 토글(toggle) 있으면 제거하고, 없으면 추가
    inputWrap.classList.toggle('active');




    //active 클래스가 있는지 검사
    if (inputWrap.classList.contains('active')) {
      // 비밀번호 보이기
      //눈 아이콘을 가려진 눈 모양으로 바꾸기
      eyeIcon.className = 'fas fa-eye-slash';
      passwordInput.type = 'text';
    } else {
      //if와 반대 작용
      eyeIcon.className = 'fas fa-eye';
      passwordInput.type = 'password';
    }



  }); 




//fas fa-eye-slash, fas fa-eye 사용이유  - 이 아이콘 클래스는 Font Awesome이라는 아이콘 라이브러리에서 제공하는 클래스
// 아이콘 라이브러리리-> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous"/>

//const 중복 선언 x 재활용 o

//document: HTML 문서 전체를 의미.

//querySelector('.eyes'): 클래스가 eyes인 요소 중 첫 번째 것을 선택 -> querySelectorAll 

// eyes 변수에 눈 아이콘 저장 => const eyes = document.querySelectorAll('.eyes'); 

//id가 password인 인풋요소 가져오기 => const passwordInput = document.getElementById('password');

//eyes 클릭시 실행되는 동작 코드 eyes.addEventListener('click', function () { ... }); ->click감지

//inputWrap.classList.toggle('active');
//classList: 클래스 속성 목록을 조작하는 객체
//.toggle('active'): active 클래스가 있으면 제거, 없으면 추가(on, off기능)

//querySelector, getElementById	DOM 요소 가져오기
//addEventListener	이벤트 등록하기
//***classList.toggle()	클래스 추가/제거 자동 전환****
//input.type	비밀번호 보기/숨기기