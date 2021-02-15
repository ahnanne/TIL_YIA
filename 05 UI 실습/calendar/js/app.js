// 상태
let today = new Date();

let currMonth = 0;
let currMonthDates = [];
let currFirstDay = 0;

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
const getDays = (dateObj, date) => new Date(dateObj.setDate(date)).getDay();

const dayToStr = dayNumber => {
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

// 이전 달 날짜들 render
const renderPrevDates = () => {
  prevMonthDates.forEach((date, i) => {
    if (i === prevMonthDates.length - currFirstDay) {
      if (i > prevMonthDates.length - 1) return;
      const $div = document.createElement('div');
      $div.setAttribute('class', 'grid-item date');
      $div.textContent = date;
      document.querySelector('.calendar-grid').appendChild($div);
    }
  });
};

// 이번 달 날짜들 render
const renderCurrDates = () => {
  currMonthDates.forEach((date, i) => {
    const $div = document.createElement('div');
    $div.setAttribute('class', 'grid-item date');
    $div.textContent = date;
    document.querySelector('.calendar-grid').appendChild($div);
  });
};

// 다음 달 날짜들 render
const renderNextDates = () => {
  // 남은 칸 구하기
  const x = 42 - [...document.querySelectorAll('.grid-item.date')].length;
  nextMonthDates.forEach((date, i) => {
    if (i >= x) return;
    const $div = document.createElement('div');
    $div.setAttribute('class', 'grid-item date');
    $div.textContent = date;
    document.querySelector('.calendar-grid').appendChild($div);
  });
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

// render month & year
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.month').textContent = monthToStr(currMonth);
  document.querySelector('.year').textContent = today.getFullYear();
});

// 이달의 첫째날이 무슨 요일인지 구하기
currFirstDay = getDays(today, 1);

renderPrevDates();
renderCurrDates();
renderNextDates();
