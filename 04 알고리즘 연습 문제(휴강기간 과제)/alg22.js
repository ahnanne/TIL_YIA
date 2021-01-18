// 두 정수 사이의 합
function adder(x, y) {
  // 🍕 x = y일 경우
  if (x === y) return x;

  // 🍕 x > y일 경우
  else if (x > y) {
    const arr = [];
    for (let i = 0; i <= x - y; i++) arr[i] = y + i;

    // 합 구하기
    let sum = 0;
    arr.reduce((_, num) => sum += num, 0);

    return sum;
  }

  // 🍕 x < y일 경우
  else {
    const arr = [];
    for (let i = 0; i <= y - x; i++) arr[i] = x + i;

    // 합 구하기
    let sum = 0;
    arr.reduce((_, num) => sum += num, 0);

    return sum;
  }
}

console.log(adder(3, 5)); // 12
console.log(adder(5, 3)); // 12
console.log(adder(3, 3)); // 3
console.log(adder(10, 1)); // 55
