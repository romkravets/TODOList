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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ToDoClass =
/*#__PURE__*/
function () {
  function ToDoClass() {
    _classCallCheck(this, ToDoClass);

    this.tasks = JSON.parse(localStorage.getItem("TASKS"));

    if (!this.tasks) {
      this.tasks = [{
        id: Date.now(),
        task: "execute test task",
        desc: "Ciklum internship",
        isComplete: false,
        priority: "high"
      }, {
        id: Date.now(),
        task: "lern javascript",
        desc: "",
        isComplete: false,
        priority: "low"
      }, {
        id: Date.now(),
        task: "apply internship",
        desc: "send email",
        isComplete: true,
        priority: "normal"
      }];
    }

    this.loadTasks();
    this.addEventListeners();
    this.btnAddEventListeners();
    this.deleteTask();
    this.modalToggle();
    this.searchToggle(); //this.toggleTaskStatus();

    this.filtredTask(this.tasks); //this.editToggle();

    console.log(this.tasks);
  }

  _createClass(ToDoClass, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      // Add Task keypress
      document.getElementById("addTask").addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
          _this.addTask(event.target.value);

          event.target.value = "";
        }
      });
    }
  }, {
    key: "btnAddEventListeners",
    value: function btnAddEventListeners() {
      var _this2 = this;

      // Add Task click
      document.getElementById("btnTask").addEventListener("click", function (event) {
        var target = document.getElementById("addTask");
        var targetDesc = document.getElementById("addDesc");
        var priority = document.getElementById("priority");
        var modal = document.querySelector("#modalToggle");

        _this2.addTask(target.value, targetDesc.value, priority.value);

        modal.style.display = "none";
        target.value = "";
        targetDesc.value = "";
      });
    }
  }, {
    key: "addTask",
    value: function addTask(id, task, desc, priority) {
      var newTask = {
        id: Date.now(),
        task: task,
        desc: desc,
        isComplete: false,
        priority: priority
      };
      var parentDiv = document.getElementById("addTask").parentElement;

      if (task === "") {
        parentDiv.classList.add("has-error");
      } else {
        parentDiv.classList.remove("has-error");
        this.tasks.push(newTask);
        this.loadTasks();
      }
    } // toggleTaskStatus(index) {
    // this.tasks[index].isComplete = !this.tasks[index].isComplete;
    // this.loadTasks();
    // }
    // toggleTaskStatus(index) {
    //   this.tasks[index].isComplete = !this.tasks[index].isComplete;
    //   this.loadTasks();
    // }

  }, {
    key: "filtredTask",
    value: function filtredTask(tasks) {
      var unfinishedTasks = tasks.filter(function (task) {
        return task.isComplete === true;
      }).map(function (task) {
        return task.task;
      });
      console.log(unfinishedTasks); // const selectElement = document.querySelector("#complite");
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
    } // toggleTaskStatus(tasks) {
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

  }, {
    key: "deleteTask",
    value: function deleteTask(event, taskIndex) {
      var _this3 = this;

      document.querySelector("#deleteTask").addEventListener("click", function (event) {
        event.preventDefault();

        _this3.tasks.splice(taskIndex, 1);

        _this3.loadTasks();
      });
    }
  }, {
    key: "generateTaskHtml",
    value: function generateTaskHtml(task, index) {
      return "\n      <li class=\"list__item\" data-key=\"".concat(task.id, "\">\n        <label class=\"list__checkbox\" for=\"").concat(task.id, "\">\n        <input class=\"list__ccheck-status\" id=\"").concat(task.id, "\" type=\"checkbox\"  value=\"\" class=\"\" ").concat(task.isComplete ? "checked" : "", "></label>\n          <div class=\"list__title task-text ").concat(task.isComplete ? "complete" : "", "\">\n            ").concat(task.task, "\n          </div>\n          <div class=\"list__description\">\n          ").concat(task.desc, "\n          </div>\n          <div class=\"list__bottom-section\">\n            <div class=\"list__priority\">\n            ").concat(task.priority, "\n            </div>\n            <div class=\"dropdown\">\n              <button class=\"dropbtn\">...</button>\n              <div class=\"dropdown-content\">\n                <a href=\"#\" value=\"done\">done</a>\n                <a href=\"#\" value=\"edit\" class=\"edit\">edit</a>\n                <a href=\"#\" value=\"delete\" id=\"deleteTask\">delete</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n    ");
    }
  }, {
    key: "modalToggle",
    value: function modalToggle() {
      var modal = document.querySelector("#modalToggle");
      document.querySelector("#addBtn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log(modal);
        console.log("click");
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
    } // editToggle() {
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

  }, {
    key: "searchToggle",
    value: function searchToggle() {
      document.querySelector(".form__search").addEventListener("keyup", function (e) {
        var inputVal = e.target.value.toLowerCase();
        var items = document.querySelectorAll("li");
        Array.from(items).forEach(function (item) {
          var itemName = item.querySelector(".list__title").innerHTML;

          if (itemName.toLowerCase().indexOf(inputVal) != -1) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  }, {
    key: "loadTasks",
    value: function loadTasks() {
      var _this4 = this;

      localStorage.setItem("TASKS", JSON.stringify(this.tasks));
      var tasksHtml = this.tasks.reduce(function (html, task, index) {
        return html += _this4.generateTaskHtml(task, index);
      }, "");
      document.getElementById("taskList").innerHTML = tasksHtml;
      localStorage.clear();
    }
  }]);

  return ToDoClass;
}();

var toDo;
window.addEventListener("load", function () {
  toDo = new ToDoClass();
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