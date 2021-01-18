// 하샤드 수
function isHarshad(n){
  // 각 자릿수의 합 구하기
  let str = '';
  str += n;
  const arr = [...str];

  let sum = 0;
  arr.reduce((_, num) => sum += (+num), 0);

  // 하샤드 수인지 아닌지 판단하기
  return n % sum ? false : true;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
console.log(isHarshad(180)); // true
console.log(isHarshad(190)); // true
