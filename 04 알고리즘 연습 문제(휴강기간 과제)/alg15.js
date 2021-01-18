// 직사각형이 되는 나머지 좌표 구하기
function getRestCoordinate(array) {
  // array 평탄화
  const flatArray = array.flat();

  // 새로운 좌표를 반환하기 위한 빈 배열 생성
  const coord = [];

  // 각 숫자는 총 2회 등장해야 하며, 1회 등장한 숫자 2개로 좌표를 만들면 됨.
  // 이때, 먼저 등장한 숫자가 x축이 되어야 함. 즉 새로운 배열에 먼저 push되어야 함.
  flatArray.forEach(v => {
    if (!flatArray.includes(v, flatArray.indexOf(v) + 1)) coord.push(v);
  });

  return coord;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[3, 100], [7, 100], [3, 6]])); // [7, 6]

// 정사각형도 직사각형에 포함된다.😊
