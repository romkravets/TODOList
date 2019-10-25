export class TodoList {
  constructor(rootElement, todoData) {
    this.rootElement = rootElement;
    this.todoData = todoData;
    this.todoItem;
    this.todoItemD;
    this.data;
    //this.saveBtn = document.querySelector(".savelist");
    this.render();
  }

  render() {
    this.todoData.map((todo, index) => {
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
      // this.todoItem.key = index + 1;
      this.rootElement.innerHTML += this.todoItem;
    });

    const addList = document.querySelector(".savelist");

    addList.addEventListener("click", e => {
      e.preventDefault();
      let indentification = 0;
      let titleData = document.querySelector("#addTitle").value;
      let descriptionData = document.querySelector("textarea").value;
      let priorityData = document.querySelector("select").value;
      console.log(titleData);
      console.log(descriptionData);
      console.log(priorityData);
      console.log(this.todoData);
      //let id = indentification++;
      let title = titleData;
      let description = descriptionData;
      let priority = priorityData;

      this.data = this.todoData.push({ title, description, priority });

      modal.style.display = "none";
      this.rootElement.innerHTML += this.data;
    });

    //this.saveBtn.addEventListener("click", () => this.addToDo());

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
}
