function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp;
        for (let j = 0; j < array.length - (i + 1); j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([2, 4, 5, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [ -1, 0, 1, 2, 3, 4 ]