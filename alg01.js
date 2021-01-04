// 💚노드 취득 모음
const $form = document.querySelector('form');
const $input = document.querySelector('input.num');
const $result = document.querySelector('span.result');
const $truncate = document.querySelector('span.truncate');

// 짝수인지 홀수인지 - if문
function evenOrOdd(num) {
  // 입력한 값이 정수가 아닌 실수일 경우 방어 코드
  if (num % 1) {
    num = parseInt(num);
    $truncate.textContent = '*소수점 이하 절사';
  }

  // 홀수일 경우 'Odd' 반환
  if (num % 2) $result.textContent = 'Odd';
  // 짝수일 경우 'Even' 반환
  else $result.textContent = 'Even';
}

// 짝수인지 홀수인지 - 삼항 조건 연산자

// 💚이벤트 핸들러 등록
$form.onsubmit = e => {
  // form 태그 기본 기능 제거 - preventDefault
  e.preventDefault();

  // 짝수인지 홀수인지 결과 출력
  // 숫자가 아닐 경우 방어 코드
  // console.log(typeof $input.value); // 무적권 string;;
  if ($input.value === '0' || $input.value < 1) $result.textContent = '1 이상의 정수를 입력해주세요.';
  else if (!isNaN(+$input.value) && $input.value !== '') evenOrOdd($input.value);
  else $result.textContent = '숫자만 입력해주세요.';
  
  // 인풋창 초기화
  $input.value = '';
  $input.focus();
};

$input.oninput = () => {
  $truncate.textContent = '';
};
