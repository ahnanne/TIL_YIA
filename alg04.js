// 문자열 내 p와 y의 개수
function numPY(s) {
  // p와 y의 개수를 카운트하는 변수 선언
  let countP = 0;
  let countY = 0;

  // 인수가 전달되지 않을 경우에 대비한 방어 코드
  // (이 경우 문제에서 주어진 조건에 따라 true 반환)
  if (s === undefined) return true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') countP++;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'y' || s[i] === 'Y') countY++;
  }

  if (countP === countY) return true;
  return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true

console.log(numPY(' abYyyyPpPP'));      // true
