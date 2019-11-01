/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
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

var list = document.getElementById("list"); // Use javascript Bubbling and capturing tech
// once user click on UL or UL childern
//predict if it move up, move down, delete, update or mark

list.addEventListener("click", function (e) {
  //delete
  if (e.target.classList.contains("delete")) {
    var span = e.target.parentElement;
    var li = span.parentElement;
    li.classList.add("hide"); //use time out to give css animation time

    setTimeout(function () {
      list.removeChild(li);
    }, 600); //mark as complete
  } else if (e.target.classList.contains("mark")) {
    var actionSpan = e.target.parentElement.previousElementSibling;
    actionSpan.querySelector("input[type=text]").classList.toggle("complete"); //move up
  } // else if (e.target.classList.contains("up")) {
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
      var _span = e.target.parentElement;
      var _li = _span.parentElement;

      var inputText = _li.querySelector(".name input[type=text]");

      var saveInfo = _li.querySelector(".name .saveInfo");

      inputText.classList.add("input-border");
      inputText.style.cursor = "text";
      saveInfo.style.display = "block";
      inputText.readOnly = false; //save by press enter btn

      inputText.addEventListener("keypress", function (e) {
        var key = e.which || e.keyCode;

        if (key === 13) {
          // 13 is enter
          inputText.readOnly = true;
          inputText.style.cursor = "context-menu";
          inputText.classList.remove("input-border");
          saveInfo.style.display = "none";
        }
      });
    }
}); //Add new item

var formAdd = document.forms["form-add"];
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  var insertedData = formAdd.querySelector("input[type=text]").value;
  insertedData = "<li>\n     <span class=\"name\">\n        <input type=\"checkbox\">\n         <input type=\"text\" value=\"".concat(insertedData, "\" readonly=\"readonly\">\n         <p class=\"saveInfo\">Press \"Enter\" to save</p>\n     </span>\n     <span class=\"action\">\n         <button class=\"mark fas fas fa-check\"></button>\n         <button class=\"up fas fa-angle-up\"></button>\n         <button class=\"down fas fa-angle-down\"></button>\n         <button class=\"edit fas fa-pencil-alt\"></button>\n         <button class=\"delete fas fa-trash-alt\"></button>\n      </span>\n     </li>");
  list.insertAdjacentHTML("afterbegin", insertedData);
  formAdd.querySelector("input[type=text]").value = "";
  modal.style.display = "none";
}); //Search thorw item

var searchForm = document.forms["searchForm"].querySelector("input[type=text]"); //once key up

searchForm.addEventListener("keyup", function (e) {
  //convert input to lower case
  var inputVal = e.target.value.toLowerCase(); // collect ul items and convert to array

  var items = list.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    //go to --> li>span>input text
    var itemName = item.firstElementChild.querySelector("input").value; //compare input with ul items(li)

    if (itemName.toLowerCase().indexOf(inputVal) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});
var modal = document.querySelector("#modalToggle");
document.querySelector("#addBtn").addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});
document.querySelector(".modal__cancel").addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (event.target == modal) {
    e.preventDefault();
    modal.style.display = "none";
  }
});

/***/ }),

/***/ "./src/index/index.scss":
/*!******************************!*\
  !*** ./src/index/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/index/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index/index.js */"./src/index/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map