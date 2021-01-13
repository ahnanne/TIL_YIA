// 중복없는 배열
function isNotOverlapArray(array) {
  const n = array.length;

  // 비교를 위한 기준 배열 생성
  const targetArray =  Array.from({ length: n }, (_, index) => index + 1);

  // 💚누락 요소가 있는 경우
  for (let i = 0; i < n; i++) {
    if (!array.includes(targetArray[i])) return false;
  }

  // 💚중복 요소가 있는 경우(생략해도 노상관)
  const m = array.filter((v, i) => array.indexOf(v) === i).length;
  // console.log(n, m);
  if (m !== n) return false;

  return true;
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false
console.log(isNotOverlapArray([1, 2, 2, 3]));    // false
console.log(isNotOverlapArray([4, 1, 3, 5, 2])); // true

