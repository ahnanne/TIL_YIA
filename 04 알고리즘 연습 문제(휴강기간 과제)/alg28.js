// 요일 구하기
function getDayName(a, b) {
  const str = `2016/${a}/${b}`;

  const date = new Date(str);

  switch (date.getDay()) {
    case 0:
      return 'SUN';
      break;
    case 1:
      return 'MON';
      break;
    case 2:
      return 'TUE';
      break;
    case 3:
      return 'WED';
      break;
    case 4:
      return 'THU';
      break;
    case 5:
      return 'FRI';
      break;
    default:
      return '정확한 날짜를 입력해주세요.';
  }
}

console.log(getDayName(1, 1)); // FRI
console.log(getDayName(5, 24)); // TUE
