// 상태
let today = new Date();
let year = new Date().getFullYear();

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

// render month & year
const renderMonth = () => {
  document.querySelector('.month').textContent = monthToStr(currMonth);
  document.querySelector('.year').textContent = year;

  prevMonthDates.forEach((date, i) => {
    if (i >= prevMonthDates.length - currFirstDay) {
      const $div = document.createElement('div');
      $div.setAttribute('class', 'grid-item date prev-date');
      $div.textContent = date;
      document.querySelector('.calendar-grid').appendChild($div);
    }
  });

  currMonthDates.forEach(date => {
    const $div = document.createElement('div');
    $div.setAttribute('class', 'grid-item date curr-date');

    if (!new Date(year, currMonth, date).getDay()) $div.classList.add('sunday');

    $div.textContent = date;
    document.querySelector('.calendar-grid').appendChild($div);
  });

  // 오늘 날짜 표시하기
  [...document.querySelectorAll('.curr-date')].forEach($div => {
    if (new Date().getFullYear() === year && new Date().getMonth() === currMonth) {
      if (new Date().getDate() === +$div.textContent) $div.classList.add('today');
    }
  });

  const x = 42 - [...document.querySelectorAll('.grid-item.date')].length; // 남은 칸 구하기
  nextMonthDates.forEach((date, i) => {
    if (i >= x) return;
    const $div = document.createElement('div');
    $div.setAttribute('class', 'grid-item date next-date');
    $div.textContent = date;
    document.querySelector('.calendar-grid').appendChild($div);
  });
};

// remove dates(달력칸 초기화)
const removeDates = () => {
  [...document.querySelectorAll('.grid-item.date')].forEach($childNode => {
    document.querySelector('.calendar-grid').removeChild($childNode);
  });
};

// current month
currMonth = today.getMonth();
currMonthDates = getDates(today);

// previous month
const getMonth = () => {
  prevMonth = new Date(year, currMonth - 1).getMonth();
  prevMonthDates = getDates(new Date(year, currMonth - 1));
  nextMonth = new Date(year, currMonth + 1).getMonth();
  nextMonthDates = getDates(new Date(year, currMonth + 1));
};

// render dates
document.addEventListener('DOMContentLoaded', () => {
  // 이달의 첫째날이 무슨 요일인지 구하기
  currFirstDay = getDays(today, 1);

  getMonth();

  renderMonth();
});

// 페이지 넘기기
document.querySelector('.prev-btn').onclick = () => {
  currMonth = prevMonth;

  if (currMonth === 11) year -= 1;

  currMonthDates = prevMonthDates;
  currFirstDay = getDays(new Date(year, currMonth), 1);

  // 달력칸 초기화
  removeDates();

  getMonth();

  renderMonth();
};

document.querySelector('.next-btn').onclick = () => {
  currMonth = nextMonth;

  if (currMonth === 0) year += 1;

  currMonthDates = nextMonthDates;
  currFirstDay = getDays(new Date(year, currMonth), 1);

  // 달력칸 초기화
  removeDates();

  getMonth();

  renderMonth();
};
