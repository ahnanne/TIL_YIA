// 6. 특정 요소의 프로퍼티 값 반전
/*
const hi = { x: true };
console.log(!hi.x); // false
*/
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 스프레드 문법 사용
function toggleCompletedById(id) {
  todos.forEach(todo => {
    if (todo.id === id) {
      const copiedTodo = { ...todo };
      todo.completed = !(copiedTodo.completed);
    }
  });
}

/*
// Object.assign 사용
function toggleCompletedById(id) {
  todos.forEach((todo, i) => {
    if (todo.id === id) {
      todos[i] = Object.assign({}, todo, { completed: !(todo.completed) });
    }
  });
}

toggleCompletedById(2);

console.log(todos);
*/
