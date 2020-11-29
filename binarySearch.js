function binarySearch(array, target) {
    var firstIndex = 0;
    var lastIndex = array.length - 1;

    while (firstIndex <= lastIndex) {
        var centerIndex = Math.floor((firstIndex + lastIndex) / 2);

        if (target === array[centerIndex]) {
            return centerIndex;
        } else if (target < array[centerIndex]) {
            lastIndex = centerIndex - 1;
        } else {
            firstIndex = centerIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1