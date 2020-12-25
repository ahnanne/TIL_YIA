// 1. html 생성
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    if (todo.completed) {
      html += `<li id="${todo.id}">
  <label><input type="checkbox" checked>${todo.content}</label>
</li>`;
    } else {
      html += `<li id="${todo.id}">
  <label><input type="checkbox">${todo.content}</label>
</li>`;
    }
  });

  return html;
}

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
