import "./index.scss";

class ToDoClass {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("TASKS"));
    if (!this.tasks) {
      this.tasks = [
        {
          id: Date.now(),
          task: "execute test task",
          desc: "Ciklum internship",
          isComplete: false,
          priority: "high"
        },
        {
          id: Date.now(),
          task: "lern javascript",
          desc: "",
          isComplete: false,
          priority: "low"
        },
        {
          id: Date.now(),
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
    //this.toggleTaskStatus();
    this.filtredTask(this.tasks);
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

  addTask(id, task, desc, priority) {
    let newTask = {
      id: Date.now(),
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

  // this.tasks[index].isComplete = !this.tasks[index].isComplete;
  // this.loadTasks();
  // }

  // toggleTaskStatus(index) {
  //   this.tasks[index].isComplete = !this.tasks[index].isComplete;
  //   this.loadTasks();
  // }

  filtredTask(tasks) {
    let unfinishedTasks = tasks
      .filter(task => task.isComplete === true)
      .map(task => task.task);
    console.log(unfinishedTasks);
    // const selectElement = document.querySelector("#complite");
    // const output = document.querySelector(".compliteOption");
    // selectElement.addEventListener("click", event => {
    //   const outpuTarget =
    //     selectElement.options[selectElement.selectedIndex].value;

    // const inputVal = e.target.value.toLowerCase();
    // const items = document.querySelectorAll("li");
    // Array.from(items).forEach(function(item) {
    //   const itemName = item.querySelector(".list__title").innerHTML;
    //   if (itemName.toLowerCase().indexOf(inputVal) != -1) {
    //     item.style.display = "flex";
    //   } else {
    //     item.style.display = "none";
    //   }
    // });

    // const items = document.querySelectorAll("li");
    // Array.from(items).forEach(item => {

    //const itemName = item.querySelector(".list__ccheck-status").value;
    // if (itemName) {
    //   item.style.display = "flex";
    // } else {
    //   item.style.display = "none";

    //     if (outpuTarget === "done") {
    //       console.log(outpuTarget, "outpuTarget");
    //       item.style.display = "none";
    //     } else if (outpuTarget === "open") {
    //       console.log(outpuTarget, "outpuTarget Open");
    //       item.style.display = "none";
    //     } else {
    //       console.log(outpuTarget, "All");
    //       item.style.display = "flex";
    //     }
    //   });
    //   this.loadTasks();
    // });
  }

  // toggleTaskStatus(tasks) {
  //   const list = document.querySelector(".list__items");
  //   const index = tasks.findIndex(task => task.id === Number(itemKey));
  //   const item = document.querySelector(`[data-key='${itemKey}']`);
  //   list.addEventListener("click", event => {
  //     if (event.target.classList.contains("list__checkbox")) {
  //       const itemKey = event.target.parentElement.dataset.key;
  //       console.log(itemKey);
  //       //toggleDone(itemKey);
  //     }
  //   });
  //   tasks[index].isComplete = !tasks[index].isComplete;

  //   if (tasks[itemKey].isComplete) {
  //     item.classList.add("done");
  //     console.log("done");
  //   } else {
  //     item.classList.remove("done");
  //     console.log("none");
  //   }
  //   this.loadTasks();
  // }

  deleteTask(event, taskIndex) {
    document.querySelector("#deleteTask").addEventListener("click", event => {
      event.preventDefault();
      this.tasks.splice(taskIndex, 1);
      this.loadTasks();
    });
  }

  generateTaskHtml(task, index) {
    return `
      <li class="list__item" data-key="${task.id}">
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

    localStorage.clear();
  }
}

let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});
