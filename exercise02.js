function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) return false;
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 3, 4, 1, 5])); // false