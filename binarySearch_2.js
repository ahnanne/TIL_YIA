let binarySearch = function (array, target) {
    let start = 0; // 시작 포인터(인덱스)
    let end = array.length - 1; // 끝 포인터(인덱스)
    // 선형 검색과 달리, 반복 작업을 몇 번 해야할지 예측할 수 없으므로 for문이 아닌 while문 사용
    // 반복문을 언제까지 돌릴지 고려
    while (array && start <= end) { // array에 falsy 값 들어올 경우 대비하여 방어 코드 작성
        let mid = Math.floor((start + end) / 2);
        // while문 안에 선언한 이유 - 가독성 때문
        // let으로 선언한 변수는 블록 레벨 스코프를 지원하므로,
        // while문이 한 턴(turn)을 끝낼 때마다 소멸하고, 다시 한 턴을 시작할 때 또 새로 생성됨
        if (target === array[mid]) return mid;
        // 첫 시도만에 성공하는 경우에 대비하여, 성공했을 때의 코드를 가장 앞쪽에 선언해주는 것이 일반적임
        else if (target < array[mid]) end = mid - 1;
        // end는 전역에서 이미 선언되어 있으므로, 재할당만 하면 됨
        else start = mid + 1;
    }
    // target과 일치하는 요소가 없을 경우 -1 반환하는 코드 작성
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7)); // 6
console.log(binarySearch(3)); // -1 -> 방어 코드 때문?
console.log(binarySearch([1, 2, 3], 0)); // -1