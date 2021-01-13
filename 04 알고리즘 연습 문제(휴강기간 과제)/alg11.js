// 팰린드롬 확인하기
function checkPalindrom(str) {
  let strFromLeft = '';
  let strFromRight = '';

  // 왼쪽부터 읽을 때
  for (let i = 0; i < str.length; i++) {
    strFromLeft += str[i];
  };
  // 오른쪽부터 읽을 때
  for (let i = str.length - 1; i >= 0; i--) {
    strFromRight += str[i];
  };

  console.log('not working??', strFromLeft, strFromRight);
  if (strFromLeft === strFromRight) return true;
  else return false;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true
console.log(checkPalindrom('리효리')); // true
console.log(checkPalindrom('토마토맛토마토')); // true
console.log(checkPalindrom('토마토맛토')); // false
