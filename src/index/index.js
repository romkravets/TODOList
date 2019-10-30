//import { Controller, View, Model } from "./scripts/todo";

import "./index.scss";

export class Model {
  constructor() {
    // The state of the model, an array of todo objects, prepopulated with some data
    this.todos = [
      { id: 1, text: "Run a marathon", complete: false },
      { id: 2, text: "Plant a garden", complete: false }
    ];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false
    };

    this.todos.push(todo);
  }

  // Map through all todos, and replace the text of the todo with the specified id
  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
  }

  // Filter a todo out of the array by id
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Flip the complete boolean on the specified todo
  toggleTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
  }
}

export class View {
  constructor() {
    // The root element
    this.app = this.getElement("#root");

    // The title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    // The form, with a [type="text"] input, and a submit button
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    // The visual representation of the todo list
    this.todoList = this.createElement("ul", "todo-list");

    // Append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.form, this.todoList);
  }

  // Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  displayTodos(todos) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create todo item nodes for each todo in state
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        // Each todo item will have a checkbox you can toggle
        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        // The todo item text will be in a contenteditable span
        const span = this.createElement("span");
        span.contentEditable = true;
        span.classList.add("editable");

        // If the todo is complete, it will have a strikethrough
        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          // Otherwise just display the text
          span.textContent = todo.text;
        }

        // The todos will also have a delete button
        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes to the todo list
        this.todoList.append(li);
      });
    }
  }

  bindAddTodo(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", event => {
      if (event.target.className === "delete") {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener("change", event => {
      if (event.target.type === "checkbox") {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    // this.view.bindEditTodo(this.handleEditTodo) - We'll do this one last
  }
  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  };
}

const app = new Controller(new Model(), new View());
console.log(app);

// class ToDoClass {
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem("TASKS"));
//     if (!this.tasks) {
//       this.tasks = [
//         {
//           task: "execute test task",
//           desc: "Ciklum internship",
//           isComplete: false,
//           priority: "high"
//         },
//         {
//           task: "lern javascript",
//           desc: "",
//           isComplete: false,
//           priority: "low"
//         },
//         {
//           task: "apply internship",
//           desc: "send email",
//           isComplete: true,
//           priority: "normal"
//         }
//       ];
//     }

//     this.loadTasks();
//     this.render();
//     this.addEventListeners();
//     this.btnAddEventListeners();
//     this.modalToggle();
//     this.searchToggle();
//     this.filtredPriority();
//     this.deleteTask();
//     this.toggleTaskStatus();
//     this.filtredTask(this.tasks);
//     this.itemIndex;
//     this.doneTaskBtn = document.querySelectorAll("#doneTask");
//     this.checkedTask = document.querySelectorAll("#list__item input");
//   }

//   render() {
//     for (let i = 0; i < this.tasks.length; i++) {
//       this.itemIndex = this.tasks[i];
//     }
//     // for (let i = 0; i < this.checkedTask.length; i++) {
//     //   console.log(this.checedTask);
//     //   if (this.checkedTask.checked) {
//     //     console.log("checedTask.checked");
//     //   } else {
//     //     console.log("none");
//     //   }
//     // }
//   }

//   addEventListeners() {
//     // Add Task keypress
//     document.getElementById("addTask").addEventListener("keypress", event => {
//       if (event.keyCode === 13) {
//         this.addTask(event.target.value);
//         event.target.value = "";
//       }
//     });
//   }

//   btnAddEventListeners() {
//     // Add Task click
//     document.getElementById("btnTask").addEventListener("click", event => {
//       let target = document.getElementById("addTask");
//       let targetDesc = document.getElementById("addDesc");
//       let priority = document.getElementById("priority");
//       const modal = document.querySelector("#modalToggle");
//       this.addTask(target.value, targetDesc.value, priority.value);
//       modal.style.display = "none";
//       target.value = "";
//       targetDesc.value = "";
//     });
//   }

//   addTask(task, desc, priority) {
//     let newTask = {
//       task,
//       desc,
//       isComplete: false,
//       priority
//     };
//     let parentDiv = document.getElementById("addTask").parentElement;
//     if (task === "") {
//       parentDiv.classList.add("has-error");
//     } else {
//       parentDiv.classList.remove("has-error");
//       this.tasks.push(newTask);
//       this.loadTasks();
//     }
//   }

//   toggleTaskStatus() {
//     const checkedTasks = document.querySelector(".list__check-status");
//     checkedTasks.addEventListener("change", event => {
//       this.itemIndex.isComplete = !this.itemIndex.isComplete;
//       //this.loadTasks();
//     });
//   }

//   filtredTask() {
//     const selectElement = document.querySelector("#complite");
//     const output = document.querySelector(".compliteOption");
//     selectElement.addEventListener("click", event => {
//       const outpuTarget =
//         selectElement.options[selectElement.selectedIndex].value;

//       if (outpuTarget == "done") {
//         this.tasks
//           .filter(task => task.isComplete === true)
//           .map(
//             task =>
//               (document.getElementById(
//                 "taskList"
//               ).innerHTML = this.generateTaskHtml(task))
//           );
//       } else if (outpuTarget == "all") {
//         this.loadTasks();
//       } else if (outpuTarget == "open") {
//         this.tasks
//           .filter(task => task.isComplete === false)
//           .map(
//             task =>
//               (document.getElementById(
//                 "taskList"
//               ).innerHTML = this.generateTaskHtml(task))
//           );
//       }
//     });
//   }

//   filtredPriority() {
//     const selectElement = document.querySelector("#prioritySelect");
//     const output = document.querySelector(".compliteOption");
//     selectElement.addEventListener("click", event => {
//       const outpuTarget =
//         selectElement.options[selectElement.selectedIndex].value;
//       if (outpuTarget == "all") {
//         this.loadTasks();
//       } else if (outpuTarget == "high") {
//         this.tasks
//           .filter(task => task.priority === "high")
//           .map(
//             task =>
//               (document.getElementById(
//                 "taskList"
//               ).innerHTML = this.generateTaskHtml(task))
//           );
//       } else if (outpuTarget == "normal") {
//         this.tasks
//           .filter(task => task.priority === "normal")
//           .map(
//             task =>
//               (document.getElementById(
//                 "taskList"
//               ).innerHTML = this.generateTaskHtml(task))
//           );
//       } else if (outpuTarget == "low") {
//         this.tasks
//           .filter(task => task.priority === "low")
//           .map(
//             task =>
//               (document.getElementById(
//                 "taskList"
//               ).innerHTML = this.generateTaskHtml(task))
//           );
//       }
//     });
//   }

//   // loadEventListeners() {
//   //   taskList.addEventListener("click", e => {
//   //     if (e.target.parentElement.classList.contains("select-filter")) {
//   //       e.target.parentElement.parentElement.remove();
//   //       console.log(taskList, "click");
//   //     }
//   //   });
//   // }

//   deleteTask(event, itemIndex) {
//     const deleteTask = document.querySelectorAll("#deleteTask");
//     for (let i = 0; i < deleteTask.length; i++) {
//       deleteTask[i].addEventListener("click", event => {
//         console.log(deleteTask, "click");
//         this.tasks.splice(this.itemIndex, 1);
//         this.loadTasks();
//       });
//     }
//   }

//   generateTaskHtml(task, index) {
//     return `
//         <li class="list__item">
//           <label class="list__checkbox" for="${task.id}">
//             <input class="list__check-status" id="${
//               task.id
//             }" type="checkbox"  value="" class="" ${
//       task.isComplete ? "checked" : ""
//     }></label>
//           <div class="list__title task-text ${
//             task.isComplete ? "complete" : ""
//           }">
//             ${task.task}
//           </div>
//           <div class="list__description">
//           ${task.desc}
//           </div>
//           <div class="list__bottom-section">
//             <div class="list__priority">
//             ${task.priority}
//             </div>
//             <div class="dropdown ">
//               <button class="dropbtn">...</button>
//               <div class="dropdown-content select-filter">
//                 <a href="#" value="done  id="doneTask"">done</a>
//                 <a href="#" value="edit" class="edit">edit</a>
//                 <a href="#" value="delete" id="deleteTask">delete</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>
//     `;
//   }

//   modalToggle() {
//     const modal = document.querySelector("#modalToggle");
//     document.querySelector("#addBtn").addEventListener("click", e => {
//       e.preventDefault();
//       modal.style.display = "block";
//     });

//     document.querySelector(".modal__cancel").addEventListener("click", e => {
//       e.preventDefault();
//       modal.style.display = "none";
//     });

//     window.addEventListener("click", e => {
//       if (event.target == modal) {
//         e.preventDefault();
//         modal.style.display = "none";
//       }
//     });
//   }

//   searchToggle() {
//     document.querySelector(".form__search").addEventListener("keyup", e => {
//       const inputVal = e.target.value.toLowerCase();
//       const items = document.querySelectorAll("li");
//       Array.from(items).forEach(function(item) {
//         const itemName = item.querySelector(".list__title").innerHTML;
//         if (itemName.toLowerCase().indexOf(inputVal) != -1) {
//           item.style.display = "flex";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     });
//   }

//   loadTasks() {
//     localStorage.setItem("TASKS", JSON.stringify(this.tasks));
//     let tasksHtml = this.tasks.reduce(
//       (html, task, index) => (html += this.generateTaskHtml(task, index)),
//       ""
//     );
//     document.getElementById("taskList").innerHTML = tasksHtml;

//     localStorage.clear();
//   }
// }

// let toDo;

// window.addEventListener("load", () => {
//   toDo = new ToDoClass();
// });
