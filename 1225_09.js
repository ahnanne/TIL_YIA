// 9. id 프로퍼티의 값 중에서 최대값 구하기
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  let maxId = 0;
  todos.reduce((_, curr) => { if (curr.id > maxId) maxId = curr.id; }, 0);
  return maxId;
}

console.log(getMaxId()); // 3
