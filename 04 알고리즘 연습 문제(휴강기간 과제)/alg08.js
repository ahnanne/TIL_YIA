// 수박수박수박수박수박수?
function waterMelon(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    if (i % 2) str += '박';
    else str += '수';
  }

  return str;
}

console.log('n이 3인 경우: ' + waterMelon(3)); // 수박수
console.log('n이 4인 경우: ' + waterMelon(4)); // 수박수박
