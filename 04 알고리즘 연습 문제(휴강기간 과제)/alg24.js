// 배열에서 특정 값만을 구하기
function getArray(arr) {
  const newArr = [];

  arr.forEach(element => {
    if (!(element % 2) && element > 3) newArr.push(element);
  });

  return newArr;
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
console.log(getArray([10, 25, 3, 14, 15, 3.6, 3.7])); // [ 10, 14 ]
console.log(getArray([10, 25, 3, 14, 15, 3.6, 4.7])); // [ 10, 14 ]
