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
      targetDesc.value = "";
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
      <li class="list__item">
        <label class="list__checkbox"><input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" class="" ${
      task.isComplete ? "checked" : ""
    }></label>
          <div class="list__title task-text ${
            task.isComplete ? "complete" : ""
          }">
            ${task.task}
          </div>
          <div class="list__description">
          ${task.desc}
          </div>
          <div class="list__bottom-section">
              <div class="list__priority">
              ${task.priority}
              </div>
              <div>
                <select class="list__option">
                  <option value="">...</option>
                  <option value="done">done</option>
                  <option value="edit">edit</option>
                  <option value="delete" id="deleteTask">delete</option>
                </select>
              </div>
             
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

    //localStorage.clear();
  }
}

let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});
