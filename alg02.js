// 1부터 10,000까지의 숫자 중, 8이 등장하는 횟수 구하기
function getCount8 () {
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    i += '';
    for (j = 0; j < i.length; j++) {
      if (+i.charAt(j) === 8) count++;
    }
  }
  return count;
}

console.log(getCount8()); // 4000

