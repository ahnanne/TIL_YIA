// 최단 거리 1차원 점의 쌍 구하기
function findMinDistance(array) {
  let minDistance = Infinity;
  const outerArray = [];

  // 최단 거리 구하기
  for (let i = 0; i < array.length - 1; i++) {
    const distance = array[i + 1] - array[i];

    if (distance <= minDistance) minDistance = distance;
  }

  // 최단 거리에 해당하는 쌍(들) 구하기
  for (let i = 0; i < array.length - 1; i++) {
    const innerArray = [array[i], array[i + 1]];

    if (array[i + 1] - array[i] === minDistance) outerArray.push(innerArray);
  }

  return outerArray;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
