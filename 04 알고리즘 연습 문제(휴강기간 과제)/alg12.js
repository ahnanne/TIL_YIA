// 중복 요소 제거
function uniq(array) {
  const newArr = array.slice();

  for (let i = 0; i < array.length; i++) {
    let targetIndex = array.indexOf(array[i]);

    for (j = i + 1; j < array.length; j++) {
      if (array[targetIndex] === newArr[j]) {
        newArr.splice(j, 1);
        j--;
        console.log(newArr);
      }
    }
  }

  return newArr;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
console.log(uniq(['a', 'b', 'c', 'a', 'b', 'c', 'a'])); // ['a', 'b', 'c']
console.log(uniq([2, 1, 2, 2, 1])); // [ 2, 1 ]
