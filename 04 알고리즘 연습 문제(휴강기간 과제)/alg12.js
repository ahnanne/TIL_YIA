// 중복 요소 제거
function uniq(array) {
  const newArray = array.filter((v, i) => array.indexOf(v) === i);
  return newArray;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
console.log(uniq(['a', 'b', 'c', 'a', 'b', 'c', 'a'])); // ['a', 'b', 'c']
console.log(uniq([2, 1, 2, 2, 1])); // [ 2, 1 ]
