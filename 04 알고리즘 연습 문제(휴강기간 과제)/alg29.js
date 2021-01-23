// 일주일 날짜 구하기
function getCurrentWeek() {
  const today = new Date();
  const local = today.setHours(today.getHours() + 9);
  const localToday = new Date(local);
  const day = localToday.getDay();
  const date = localToday.getDate();
  const array = [];
  const makeStr = function (date) {
    let str = '';
    for (const key of (date + '')) {
      str += key;
      if (str.length > 9) break;
    }

    return str;
  };

  for (let i = 0; i <= 6; i++) {
    if (i !== day) continue;
    else {
      for (let j = -i; j <= 6 - i; j++) {
        const eachDay = localToday.setDate(date + j);
        const eachDate = new Date(eachDay);
        const ISODate = eachDate.toISOString();
        array.push(makeStr(ISODate));
      }
    }
  }

  return array;
}

console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/
/*
작성일(2021-01-24 SUN) 기준 반환값
[
  '2021-01-24',
  '2021-01-25',
  '2021-01-26',
  '2021-01-27',
  '2021-01-28',
  '2021-01-29',
  '2021-01-30'
]
*/
