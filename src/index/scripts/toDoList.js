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

    let modal = document.querySelector("#myModal");
    console.log(modal);

    // Get the button that opens the modal
    var btnToDo = document.querySelector("#addBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btnToDo.addEventListener("click", () => {
      console.log("click");
      modal.style.display = "block";
    });

    //When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
