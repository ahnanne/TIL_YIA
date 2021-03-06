// 배열의 첫 요소와 마지막 요소로 배열 만들기
function generateRange(from, to) {
  const res = [];

  // 방어코드(from >= to일 경우)
  if (from >= to) return '시작 요소가 끝 요소보다 작아야 합니다.'

  for (let i = 0; i <= to - from; i++) res[i] = from + i;

  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange(27, 40));
/*
[
  27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38,
  39, 40
]
*/
console.log(generateRange(40, 27)); // 시작 요소가 끝 요소보다 작아야 합니다.
