// 상태
let today = new Date();

let currMonth = 0;
let currMonthDates = [];

let prevMonth = 0;
let prevMonthDates = [];

let nextMonth = 0;
let nextMonthDates = [];

// 함수
// 날짜 배열 만들기
const getDates = dateObj => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();

  const searchDate = (y, m, d) => new Date(new Date(y, m).setDate(d)).getDate();

  const first = searchDate(year, month, 1);
  const last = (() => {
    if (month === 1) {
      return searchDate(year, month, 29) === 1 ? searchDate(year, month, 28) : searchDate(year, month, 29);
    }
    return searchDate(year, month, 31) === 1 ? searchDate(year, month, 30) : searchDate(year, month, 31);
  })();

  return (() => {
    const monthDates = [];

    for (let date = first; date <= last; date++) {
      monthDates.push(date);
    }
    return monthDates;
  })();
};

// get day
const getDays = (dateObj, date) => {
  const days = dayNumber => {
    switch (dayNumber) {
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
      case 6:
        return 'SAT';
      default:
        return 'SUN';
    }
  };

  return days(new Date(dateObj.setDate(date)).getDay());
};

// month to string
const monthToStr = month => {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return '-';
  }
};

// current month
currMonth = today.getMonth();
currMonthDates = getDates(today);

// previous month
prevMonth = new Date(today.getFullYear(), today.getMonth() - 1).getMonth();
prevMonthDates = getDates(new Date(today.getFullYear(), today.getMonth() - 1));

// next month
nextMonth = new Date(today.getFullYear(), today.getMonth() + 1).getMonth();
nextMonthDates = getDates(new Date(today.getFullYear(), today.getMonth() + 1));

// 이달의 첫째날이 무슨 요일인지 구하기
console.log(getDays(today, 1));

// render month & year
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.month').textContent = monthToStr(currMonth);
  document.querySelector('.year').textContent = today.getFullYear();
});
