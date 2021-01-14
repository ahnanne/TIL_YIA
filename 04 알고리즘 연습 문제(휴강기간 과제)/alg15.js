// 직사각형이 되는 나머지 좌표 구하기
function getRestCoordinate(array) {
  // array 평탄화
  const newArray = array.flat();

  // 새로운 좌표를 반환하기 위한 빈 배열 생성
  const coord = [];

  newArray.forEach(v => {
    if (!newArray.includes(v, newArray.indexOf(v) + 1)) coord.push(v);
  });

  return coord;
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]
console.log(getRestCoordinate([[3, 100], [7, 100], [3, 6]])); // [7, 6]

// 정사각형도 직사각형에 포함된다.😊
