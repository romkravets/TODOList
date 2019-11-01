import "./index.scss";
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
//         window.location.reload();
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

//     //localStorage.clear();
//   }
// }

// let toDo;

// window.addEventListener("load", () => {
//   toDo = new ToDoClass();
// });

//ul list
const list = document.getElementById("list");

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

    this.render();
    this.loadTasks();
  }

  render() {
    // Use javascript Bubbling and capturing tech
    // once user click on UL or UL childern
    //predict if it move up, move down, delete, update or mark
    list.addEventListener("click", function(e) {
      //delete
      if (e.target.classList.contains("delete")) {
        const span = e.target.parentElement;
        const li = span.parentElement;
        li.classList.add("hide");
        //use time out to give css animation time
        setTimeout(() => {
          list.removeChild(li);
        }, 600);
        //mark as complete
      } else if (e.target.classList.contains("mark")) {
        const actionSpan = e.target.parentElement.previousElementSibling;
        let checkboxElement = document.querySelector("input[type=checkbox]");
        let checkboxLi = document.querySelector(".list__item");
        let checkboxLiInput = document.querySelector(".list__item input");
        console.log(checkboxElement);
        actionSpan
          .querySelector("input[type=text]")
          .classList.toggle("complete");
        checkboxElement.checked = !checkboxElement.checked;
        checkboxLi.classList.toggle("list__item_complete");
        //move up
      }
      // else if (e.target.classList.contains("up")) {
      //   const span = e.target.parentElement;
      //   const li = span.parentElement;
      //   const prevLi = li.previousElementSibling;
      //   if (prevLi) {
      //     li.classList.add("move-pulsate");
      //     list.insertBefore(li, prevLi);
      //     //use time out to give css animation time
      //     setTimeout(() => {
      //       li.classList.remove("move-pulsate");
      //     }, 800);
      //   }
      //move down
      //}
      // else if (e.target.classList.contains("down")) {
      //   const span = e.target.parentElement;
      //   const li = span.parentElement;
      //   const nextLi = li.nextElementSibling;
      //   if (nextLi) {
      //     li.classList.toggle("move-pulsate");
      //     list.insertBefore(nextLi, li);
      //     //use time out to give css animation time
      //     setTimeout(() => {
      //       li.classList.remove("move-pulsate");
      //     }, 800);
      //   }
      //edit
      //}
      else if (e.target.classList.contains("edit")) {
        //if user click on edit
        //add to input text the border line
        //allow update input text by change readOnly
        const span = e.target.parentElement;
        const li = span.parentElement;
        const inputText = li.querySelector(".name .list__title");
        const inputDescription = li.querySelector(".name .list__description");
        const inputPriority = li.querySelector(".name .list__priority");
        // const saveInfo = li.querySelector(".name .saveInfo");
        inputText.classList.add("input-border");
        inputDescription.classList.add("input-border");
        inputPriority.classList.add("input-border");
        inputText.style.cursor = "text";
        inputDescription.style.cursor = "text";
        inputPriority.style.cursor = "text";
        // saveInfo.style.display = "block";
        inputText.readOnly = false;
        inputDescription.readOnly = false;
        inputPriority.readOnly = false;

        //save by press enter btn
        inputText.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            // 13 is enter
            inputText.readOnly = true;
            inputText.style.cursor = "context-menu";
            inputText.classList.remove("input-border");
          }
        });
        inputDescription.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            // 13 is enter
            inputDescription.readOnly = true;
            inputDescription.style.cursor = "context-menu";
            inputDescription.classList.remove("input-border");
          }
        });
        inputPriority.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            // 13 is enter
            inputPriority.readOnly = true;
            inputPriority.style.cursor = "context-menu";
            inputPriority.classList.remove("input-border");
          }
        });
      }
    });

    //Add new item
    const formAdd = document.forms["form-add"];
    formAdd.addEventListener("submit", function(e) {
      e.preventDefault();
      let insertedData = formAdd.querySelector("#addTask").value;
      let insertedDescription = formAdd.querySelector("#addDesc").value;
      let insertedPriority = formAdd.querySelector("#priority").value;
      insertedData = `<li class="list__item">
              <span class="name">
                  <label class="list__checkbox">
                      <input class="list__check-status" type="checkbox"  value="" class="">
                  </label>
                  <input class="list__title task-text" type="text" value="${insertedData}" readonly="readonly">
                  <input class="list__description" type="text" value="${insertedDescription}" readonly="readonly">
                  <input class="list__priority" type="text" value="${insertedPriority}" readonly="readonly">
                  <input class="list__priority" type="text" value="${insertedPriority}" readonly="readonly">
              </span>
              <div class="action">
                  <button class="mark fas fas fa-check"></button>
                  <button class="edit fas fa-pencil-alt"></button>
                  <button class="delete fas fa-trash-alt"></button>
              </div>
              </li>`;
      list.insertAdjacentHTML("afterbegin", insertedData);
      formAdd.querySelector("input[type=text]").value = "";
      modal.style.display = "none";
    });

    //Search thorw item
    const searchForm = document.forms["searchForm"].querySelector(
      "input[type=text]"
    );
    //once key up
    searchForm.addEventListener("keyup", function(e) {
      //convert input to lower case
      const inputVal = e.target.value.toLowerCase();
      // collect ul items and convert to array
      const items = list.getElementsByTagName("li");
      Array.from(items).forEach(function(item) {
        //go to --> li>span>input text
        const itemName = item.firstElementChild.querySelector("input").value;
        //compare input with ul items(li)
        if (itemName.toLowerCase().indexOf(inputVal) != -1) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });

    const modal = document.querySelector("#modalToggle");
    document.querySelector("#addBtn").addEventListener("click", e => {
      e.preventDefault();
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

  addEventListeners() {
    // Add Task keypress
    document.getElementById("addTask").addEventListener("keypress", event => {
      if (event.keyCode === 13) {
        this.addTask(event.target.value);
        event.target.value = "";
      }
    });
  }

  // btnAddEventListeners() {
  //   // Add Task click
  //   document.getElementById("btnTask").addEventListener("click", event => {
  //     let target = document.getElementById("addTask");
  //     let targetDesc = document.getElementById("addDesc");
  //     let priority = document.getElementById("priority");
  //     const modal = document.querySelector("#modalToggle");
  //     this.addTask(target.value, targetDesc.value, priority.value);
  //     modal.style.display = "none";
  //     target.value = "";
  //     targetDesc.value = "";
  //   });
  // }

  // addTask(task, desc, priority) {
  //   let newTask = {
  //     task,
  //     desc,
  //     isComplete: false,
  //     priority
  //   };
  //   let parentDiv = document.getElementById("addTask").parentElement;
  //   if (task === "") {
  //     parentDiv.classList.add("has-error");
  //   } else {
  //     parentDiv.classList.remove("has-error");
  //     this.tasks.push(newTask);
  //     this.loadTasks();
  //   }
  // }

  // loadTasks() {
  //   localStorage.setItem("TASKS", JSON.stringify(this.tasks));
  //   let tasksHtml = this.tasks.reduce(
  //     (html, task, index) => (html += this.generateTaskHtml(task, index)),
  //     ""
  //   );
  //   document.getElementById("taskList").innerHTML = tasksHtml;

  //   //localStorage.clear();
  // }
}

let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});
