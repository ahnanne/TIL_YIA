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

// render month & year
const renderMonthStr = () => {
  document.querySelector('.month').textContent = monthToStr(currMonth);
  document.querySelector('.year').textContent = year;
};

// 이전 달 날짜들 render
const renderPrevDates = () => {
  prevMonthDates.forEach((date, i) => {
    if (i >= prevMonthDates.length - currFirstDay) {
      const $div = document.createElement('div');
      $div.setAttribute('class', 'grid-item date prev-date');
      $div.textContent = date;
      document.querySelector('.calendar-grid').appendChild($div);
    }
  });
};

// 이번 달 날짜들 render
const renderCurrDates = () => {
  currMonthDates.forEach(date => {
    const $div = document.createElement('div');
    $div.setAttribute('class', 'grid-item date curr-date');

    if (!new Date(year, currMonth, date).getDay()) $div.classList.add('sunday');

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
    $div.setAttribute('class', 'grid-item date next-date');
    $div.textContent = date;
    document.querySelector('.calendar-grid').appendChild($div);
  });
};

// current month
currMonth = today.getMonth();
currMonthDates = getDates(today);

// previous month
const getPrevMonth = () => {
  prevMonth = new Date(year, currMonth - 1).getMonth();
};

const getPrevMonthDates = () => {
  prevMonthDates = getDates(new Date(year, currMonth - 1));
};

// next month
const getNextMonth = () => {
  nextMonth = new Date(year, currMonth + 1).getMonth();
};

const getNextMonthDates = () => {
  nextMonthDates = getDates(new Date(year, currMonth + 1));
};

// render dates
document.addEventListener('DOMContentLoaded', () => {
  // 이달의 첫째날이 무슨 요일인지 구하기
  currFirstDay = getDays(today, 1);

  getPrevMonthDates();
  getPrevMonth();
  getNextMonthDates();
  getNextMonth();

  renderMonthStr();
  renderPrevDates();
  renderCurrDates();
  renderNextDates();
});

// 페이지 넘기기
document.querySelector('.prev-btn').onclick = () => {
  currMonth = prevMonth;

  if (currMonth === 11) year -= 1;

  currMonthDates = prevMonthDates;
  currFirstDay = getDays(new Date(year, currMonth), 1);

  // 달력칸 초기화
  const $childNodeArr = [...document.querySelectorAll('.grid-item.date')];
  $childNodeArr.forEach($childNode => {
    document.querySelector('.calendar-grid').removeChild($childNode);
  });

  getPrevMonthDates();
  getPrevMonth();
  getNextMonthDates();
  getNextMonth();

  renderMonthStr();
  renderPrevDates();
  renderCurrDates();
  renderNextDates();
};

document.querySelector('.next-btn').onclick = () => {
  currMonth = nextMonth;

  if (currMonth === 0) year += 1;

  currMonthDates = nextMonthDates;
  currFirstDay = getDays(new Date(year, currMonth), 1);

  // 달력칸 초기화
  const $childNodeArr = [...document.querySelectorAll('.grid-item.date')];
  $childNodeArr.forEach($childNode => {
    document.querySelector('.calendar-grid').removeChild($childNode);
  });

  getPrevMonthDates();
  getPrevMonth();
  getNextMonthDates();
  getNextMonth();

  renderMonthStr();
  renderPrevDates();
  renderCurrDates();
  renderNextDates();
};
