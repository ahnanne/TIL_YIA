// 업다운 게임 생각해볼 것 -> 반씩 접는 경우 생각
// 주어진 그림을 보고 로직을 이해하려고 노력할 것
// 코드를 독해해볼 것
function binarySearch(array, target) {
    var firstIndex = 0;
    var lastIndex = array.length - 1;

    while (firstIndex <= lastIndex) { // 핵심
        const centerIndex = Math.floor((firstIndex + lastIndex) / 2);
        // 퍼포먼스보다는 가독성과 유지보수성이 더 중요하므로, centerIndex를 while문 안에 선언
        // target이 중간값보다 큰지 작은지에 따라 분기가 나뉜다.

        if (target === array[centerIndex]) return centerIndex;
        else if (target < array[centerIndex]) lastIndex = centerIndex - 1; // target이 더 클 경우
        else firstIndex = centerIndex + 1; // target이 더 작을 경우
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1