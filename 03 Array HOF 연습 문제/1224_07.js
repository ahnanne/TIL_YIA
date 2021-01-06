// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 스프레드 문법 사용
function toggleCompletedAll() {
  todos.forEach((todo, i) => {
    const copiedTodo = { ...todo, completed: !(todo.completed) };
    todos[i] = copiedTodo;
  });
}

/*
// Object.assign 사용
function toggleCompletedAll() {
  todos.forEach((todo, i) => {
    const copiedTodo = Object.assign({}, todo, { completed: !todo.completed});
    todos[i] = copiedTodo;
  })
}

toggleCompletedAll();

console.log(todos);
*/
