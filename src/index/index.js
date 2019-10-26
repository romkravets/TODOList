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
    //this.editToggle();
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

  // editToggle() {
  //   const editBtn = document.querySelector(".edit");

  //   for (const editBtn of editBtns) {
  //     control.addEventListener("click", () => {
  //       console.log("click edit");
  //   }
  // document.querySelector(".edit").addEventListener("click", function(e) {
  //   console.log("click edit");
  //   //if user click on edit
  //   //add to input text the border line
  //   //allow update input text by change readOnly
  //   const span = e.target.parentElement;
  //   const li = span.parentElement;
  //   const inputText = li.querySelector(".list__item");
  //   // const saveInfo = li.querySelector(".name .saveInfo");
  //   //inputText.classList.add("input-border");
  //   //inputText.style.cursor = "text";
  //   // saveInfo.style.display = "block";
  //   //inputText.readOnly = false;

  //   //save by press enter btn
  //   // inputText.addEventListener("keypress", function(e) {
  //   //   var key = e.which || e.keyCode;
  //   //   if (key === 13) {
  //   //     // 13 is enter
  //   //     inputText.readOnly = true;
  //   //     inputText.style.cursor = "context-menu";
  //   //     inputText.classList.remove("input-border");
  //   //     // saveInfo.style.display = "none";
  //   //   }
  //   // });
  // });
  //}

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
