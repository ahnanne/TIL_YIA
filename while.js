// 제어문(control statement) 연습 문제 - while문 연습

// 💚 취득 노드 모음
const $sortEvenBtn = document.querySelector('button.result1');
const $sortEven = document.querySelector('span.result1');
const $sortOddBtn = document.querySelector('button.result2');
const $sortOdd = document.querySelector('span.result2');

// 1. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
const sortEven = () => {
  $sortEven.textContent = '';
  // 버튼 클릭할 때마다 span 초기화 시켜주기

  let i = 0;

  while (i < 10) {
    if (!(i % 2)) $sortEven.textContent += `${i} `;
    i++;
  }
};

// 2. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.
const sortOdd = () => {
  $sortOdd.textContent = '';
  // 버튼 클릭할 때마다 span 초기화 시켜주기

  let i = 10;

  while (i > 0) {
    if (i % 2) $sortOdd.textContent += `${i} `;
    i--;
  }
};

// 💚 이벤트 핸들러 등록
$sortEvenBtn.addEventListener('click', sortEven);
$sortOddBtn.addEventListener('click', sortOdd);
