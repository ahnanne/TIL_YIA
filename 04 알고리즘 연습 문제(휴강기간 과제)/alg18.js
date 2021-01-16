// 피보나치 수
function fibonacci(n) {
  // 0부터 n번째까지의 피보나치 수를 요소로 갖는 배열(arr) 만들기
  const arr = [0, 1];

  for (let i = 0; i < n - 1; i++) arr.push(arr[i] + arr[i + 1]);

  // n번째 피보나치 수 반환
  return arr[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(13)); // 233
console.log(fibonacci(11)); // 89
