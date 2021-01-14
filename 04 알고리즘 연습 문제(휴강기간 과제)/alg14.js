// 중복된 요소
function findDuplicated(array) {
  return array.filter((v, i) => array.indexOf(v) !== i);
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(findDuplicated([7, 6, 6, 3, 4, 3, 7])); // [ 6, 3, 7 ]