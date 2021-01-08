// 문자열을 숫자로 바꾸기
function strToInt(str) {
  // parseInt()라는 빌트인 메서드가 이미 있지만..
  // 그걸 쓰라는 말은 아닌 것 같으니 직접 구현해보겠음.
  let int = +str;

  return int;
  // ...엥?
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234