// 삽입 정렬(insertion sort)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
