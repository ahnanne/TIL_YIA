// 문자열 다루기
function alphaString46(s) {
  // 전제 : 매개변수 s에는 숫자는 인수로 전달되지 않음.

  // 인수를 아예 전달받지 못했을 경우의 방어 코드
  if (s === undefined) return false;

  // 인수를 전달받은 경우, 주어진 조건에 따라 불리언 값 반환
  else if (s.length >= 4 && s.length <= 6) {
    // 인수로 전달받은 문자열이 숫자로만 이루어져 있는 경우 true 반환
    if (/^\d+$/.test(s) === true) return true;
  }
  
  return false;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false

console.log(alphaString46('9014^')); // false
console.log(alphaString46('90 14')); // false
console.log(alphaString46('90  0')); // false
console.log(alphaString46('0000')); // true
