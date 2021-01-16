// 각 자릿수의 합 구하기
function digitSum(n) {
  if (n > 100000000) return false;

  // 배열 고차 함수 reduce를 사용하기 위해 n을 배열로 변환하기
  let str = '';
  str += n;
  const arr = [...str];

  // n의 각 자릿수의 합 구하기
  let sum = 0;
  arr.reduce((_, num) => sum += (+num), 0);

  return sum;
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false
