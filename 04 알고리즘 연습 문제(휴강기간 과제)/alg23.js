// 배열의 인접한 요소곱 중 가장 큰 값 구하기
function adjacentElementsProduct(arr) {
  // 인접한 요소곱 값을 담아 둘 새로운 배열 생성
  const resArr = [];

  // 요소곱 구해서 resArr에 집어넣기
  let res = 0;
  arr.reduce((_, cur, index) => {
    if (!arr[index + 1]) return;
    else {
      res = cur * arr[index + 1];
      resArr.push(res);
    }
  }, 1);

  // resArr 중 가장 큰 값 구하기
  let max = -Infinity;
  resArr.reduce((_, cur) => {
    if (cur > max) max = cur
  }, 0);

  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
