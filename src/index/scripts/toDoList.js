export class TodoList {
  constructor(rootElement, todoData) {
    this.rootElement = rootElement;
    this.todoData = todoData;
    this.todoItem;
    this.saveBtn = document.querySelector(".savelist");
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

    this.saveBtn.addEventListener("click", () => this.addToDo());

    const modal = document.querySelector("#ModalWindow");
    const btnToDo = document.querySelector("#addBtn");

    const span = document.getElementsByClassName("cancel")[0];

    btnToDo.addEventListener("click", () => {
      modal.style.display = "block";
    });

    span.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", () => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  addToDo() {
    this.rootElement.push(console.log(this.todoData));
  }
}
