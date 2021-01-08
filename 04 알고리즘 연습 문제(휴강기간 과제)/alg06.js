// 핸드폰 번호 가리기
function hideNumbers(str) {
  // 고차 배열 함수를 사용하기 위해 배열 만들어주기
  const copiedStr = [...str];

  const result = copiedStr.map((number, index) => {
    if(index + 4 < str.length) return '*';
    return number;
  }).join('');

  return result;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
