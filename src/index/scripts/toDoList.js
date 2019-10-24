export class TodoList {
  constructor(rootElement, todoData) {
    this.rootElement = rootElement;
    this.todoData = todoData;
    this.todoItem;
    this.render();
  }

  render() {
    this.todoData.forEach(todo => {
      this.todoItem = `
       <div class="todo">
         <h3>${todo.title}</h3>
         <p>${todo.descriprion}</p>
         <div>
            <div>
            <span>${todo.priority}</span>
            </div>
         <select>
            <option value="done">done</option>
            <option value="edit">edit</option>
            <option value="delete">delete</option>
         </select>
         </div>
       </div>`;
      this.rootElement.innerHTML += this.todoItem;
    });
  }
}
