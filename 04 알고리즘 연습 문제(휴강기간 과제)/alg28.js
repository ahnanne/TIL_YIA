// 요일 구하기
function getDayName(a, b) {
  const str = `2016/${a}/${b}`;

  const date = new Date(str);

  switch (date.getDay()) {
    case 0:
      return 'SUN';
    case 1:
      return 'MON';
    case 2:
      return 'TUE';
    case 3:
      return 'WED';
    case 4:
      return 'THU';
    case 5:
      return 'FRI';
    default:
      return '정확한 날짜를 입력해주세요.';
  }
}

console.log(getDayName(1, 1)); // FRI
console.log(getDayName(5, 24)); // TUE
