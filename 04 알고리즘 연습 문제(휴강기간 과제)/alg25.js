// 평균 구하기
function average(array){
  let cnt = 0;
  let sum = 0;

  array.reduce((_, curr) => {
    sum += curr;
    cnt++;

    return sum;
  }, 0);

  let arrayAverage = sum / cnt;

  // 결과가 정수가 아닐 경우, 소수점 넷째 자리에서 반올림
  if (!Number.isInteger(arrayAverage)) arrayAverage = +(arrayAverage).toFixed(3);

  return arrayAverage;
}

console.log(average([5, 3, 4])); // 4
console.log(average([5, 3, 5])); // 4.333
console.log(average([6, 8, 5, 100])); // 29.75
console.log(average([9, 1, 5, 0.9996])); // 4
