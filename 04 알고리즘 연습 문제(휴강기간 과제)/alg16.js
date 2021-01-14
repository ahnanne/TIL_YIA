// 약수의 합
function sumDivisor(num) {
  const divisor = [];

  for (let i = 1; i <= num; i++) {
    if (!(num % i)) divisor.push(i);
  }

  // 잘 담겼는지 확인😁
  console.log(divisor);

  let sum = 0;
  divisor.reduce((_, div) => sum += div, 0);

  return sum;
}

console.log(sumDivisor(12)); // 28
console.log(sumDivisor(28)); // 56
