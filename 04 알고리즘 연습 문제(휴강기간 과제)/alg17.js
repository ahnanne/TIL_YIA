// 소수 찾기
function numberOfPrime(n) {
  // 2부터 n까지의 정수를 요소로 갖는 배열(arr) 만들기
  const arr = [];

  for (let i = 2; i <= n; i++) arr.push(i);

  // arr 중 소수만을 요소로 갖는 배열(copiedArr) 만들기
  const copiedArr = arr.slice();

  arr.forEach(eachNum => {
    for (let i = 2; i <= eachNum; i++) {
      if (!(eachNum % i) && (eachNum !== i)) {
        copiedArr.splice(copiedArr.indexOf(eachNum), 1);
        break;
      }
    }
  });

  // console.log(copiedArr);

  // copiedArr의 요소의 개수, 즉 소수의 개수 구하기
  let cnt = 0;

  copiedArr.reduce(() => cnt++, 0);

  return cnt;
}

console.log(numberOfPrime(10)); // 4
console.log(numberOfPrime(9)); // 4
console.log(numberOfPrime(5)); // 3
console.log(numberOfPrime(100)); // 25
/*
[
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
]
*/
