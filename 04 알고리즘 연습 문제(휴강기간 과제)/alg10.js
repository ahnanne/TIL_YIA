// 배열의 최대/최소값 구하기

// 🍕배열의 요소 중 최대값 구하기
function getMaxValueFromArray(array) {
  let max = 0;

  array.reduce((prev, curr) => {
    if (curr > prev) max = curr;
    return max;
  }, -Infinity);

  return max;
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

// 🍕배열의 요소 중 최소값 구하기
function getMinValueFromArray(array) {
  let min = 0;

  array.reduce((prev, curr) => {
    if (curr < prev) min = curr;
    return min;
  }, Infinity);

  return min;
}

console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
