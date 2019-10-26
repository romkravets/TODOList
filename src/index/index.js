//import { TodoList } from "./scripts/toDoList";
// import { TogglerControl } from "./scripts/togglerControl";
// import { Toggler } from "./scripts/toggler";

import "./index.scss";

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

class ToDoClass {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("TASKS"));
    if (!this.tasks) {
      this.tasks = [
        {
          task: "execute test task",
          desc: "Ciklum internship",
          isComplete: false,
          priority: "high"
        },
        {
          task: "lern javascript",
          desc: "",
          isComplete: false,
          priority: "low"
        },
        {
          task: "apply internship",
          desc: "send email",
          isComplete: true,
          priority: "normal"
        }
      ];
    }

    this.loadTasks();
    this.addEventListeners();
    this.btnAddEventListeners();
    this.deleteTask();
    console.log(this.tasks);
  }

  addEventListeners() {
    // Add Task keypress
    document.getElementById("addTask").addEventListener("keypress", event => {
      if (event.keyCode === 13) {
        this.addTask(event.target.value);
        event.target.value = "";
      }
    });
  }

  btnAddEventListeners() {
    // Add Task click
    document.getElementById("btnTask").addEventListener("click", event => {
      let target = document.getElementById("addTask");
      let targetDesc = document.getElementById("addDesc");
      let priority = document.getElementById("priority");
      this.addTask(target.value, targetDesc.value, priority.value);
      modal.style.display = "none";
      target.value = "";
    });
  }

  addTask(task, desc, priority) {
    let newTask = {
      task,
      desc,
      isComplete: false,
      priority
    };
    let parentDiv = document.getElementById("addTask").parentElement;
    if (task === "") {
      parentDiv.classList.add("has-error");
    } else {
      parentDiv.classList.remove("has-error");
      this.tasks.push(newTask);
      this.loadTasks();
    }
  }

  toggleTaskStatus(index) {
    this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.loadTasks();
  }

  deleteTask(event, taskIndex) {
    document.querySelector("#deleteTask").addEventListener("click", event => {
      event.preventDefault();
      this.tasks.splice(taskIndex, 1);
      this.loadTasks();
    });
  }

  generateTaskHtml(task, index) {
    return `
      <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" class="" ${
      task.isComplete ? "checked" : ""
    }></label>
          </div>
          <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
            task.isComplete ? "complete" : ""
          }">
            ${task.task}
          </div>
          <div>
          ${task.desc}
          </div>
          <div>
          ${task.priority}
          </div>
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <button class="" id="deleteTask"><i class="delete-icon glyphicon glyphicon-trash"></i>del</button>
          </div>
        </div>
      </li>
    `;
  }

  loadTasks() {
    localStorage.setItem("TASKS", JSON.stringify(this.tasks));
    let tasksHtml = this.tasks.reduce(
      (html, task, index) => (html += this.generateTaskHtml(task, index)),
      ""
    );
    document.getElementById("taskList").innerHTML = tasksHtml;

    localStorage.clear();
  }
}

let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});
