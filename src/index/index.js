import "./index.scss";

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
    this.modalToggle();
    this.searchToggle();
    this.filtredPriority();
    // this.toggleTaskStatus(this.tasks);
    //this.toggleTaskStatus();
    this.filtredTask(this.tasks);
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
      const modal = document.querySelector("#modalToggle");
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

  // toggleTaskStatus(index) {
  //   this.tasks[index].isComplete = !this.tasks[index].isComplete;
  //   this.loadTasks();
  // }

  filtredTask() {
    const selectElement = document.querySelector("#complite");
    const output = document.querySelector(".compliteOption");
    selectElement.addEventListener("click", event => {
      const outpuTarget =
        selectElement.options[selectElement.selectedIndex].value;

      if (outpuTarget == "done") {
        const tasksDone = this.tasks
          .filter(task => task.isComplete === true)
          .map(
            task =>
              (document.getElementById(
                "taskList"
              ).innerHTML = this.generateTaskHtml(task))
          );
      } else if (outpuTarget == "all") {
        this.loadTasks();
      } else if (outpuTarget == "open") {
        const tasksOpen = this.tasks
          .filter(task => task.isComplete === false)
          .map(
            task =>
              (document.getElementById(
                "taskList"
              ).innerHTML = this.generateTaskHtml(task))
          );
      }
    });
  }

  filtredPriority() {
    const selectElement = document.querySelector("#prioritySelect");
    const output = document.querySelector(".compliteOption");
    selectElement.addEventListener("click", event => {
      const outpuTarget =
        selectElement.options[selectElement.selectedIndex].value;
      if (outpuTarget == "all") {
        this.loadTasks();
      } else if (outpuTarget == "high") {
        const tasksHigh = this.tasks
          .filter(task => task.priority === "high")
          .map(
            task =>
              (document.getElementById(
                "taskList"
              ).innerHTML = this.generateTaskHtml(task))
          );
      } else if (outpuTarget == "normal") {
        const tasksNormal = this.tasks
          .filter(task => task.priority === "normal")
          .map(
            task =>
              (document.getElementById(
                "taskList"
              ).innerHTML = this.generateTaskHtml(task))
          );
      } else if (outpuTarget == "low") {
        const tasksHigh = this.tasks
          .filter(task => task.priority === "low")
          .map(
            task =>
              (document.getElementById(
                "taskList"
              ).innerHTML = this.generateTaskHtml(task))
          );
      }
    });
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
          <label class="list__checkbox" for="${task.id}">
            <input class="list__ccheck-status" id="${
              task.id
            }" type="checkbox"  value="" class="" ${
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
            <div class="dropdown">
              <button class="dropbtn">...</button>
              <div class="dropdown-content">
                <a href="#" value="done">done</a>
                <a href="#" value="edit" class="edit">edit</a>
                <a href="#" value="delete" id="deleteTask">delete</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    `;
  }

  modalToggle() {
    const modal = document.querySelector("#modalToggle");
    document.querySelector("#addBtn").addEventListener("click", e => {
      e.preventDefault();
      console.log(modal);
      console.log("click");
      modal.style.display = "block";
    });

    document.querySelector(".modal__cancel").addEventListener("click", e => {
      e.preventDefault();
      modal.style.display = "none";
    });

    window.addEventListener("click", e => {
      if (event.target == modal) {
        e.preventDefault();
        modal.style.display = "none";
      }
    });
  }

  searchToggle() {
    document.querySelector(".form__search").addEventListener("keyup", e => {
      const inputVal = e.target.value.toLowerCase();
      const items = document.querySelectorAll("li");
      Array.from(items).forEach(function(item) {
        const itemName = item.querySelector(".list__title").innerHTML;
        if (itemName.toLowerCase().indexOf(inputVal) != -1) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
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
