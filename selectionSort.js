// 선택 정렬(selection sort)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minValue = Infinity;
    let saveIndex = 0;
    for (let j = i; j < array.length; j++) {
      if (minValue > array[j]) {
        minValue = array[j];
        saveIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[saveIndex];
    array[saveIndex] = temp;
  }
  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(selectionSort([2, 5, 4, 1, 3])); // [1, 2, 3, 4, 5]
