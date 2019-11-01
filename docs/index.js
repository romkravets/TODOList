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
        task: "execute test task",
        desc: "Ciklum internship",
        isComplete: false,
        priority: "high"
      }, {
        task: "lern javascript",
        desc: "",
        isComplete: false,
        priority: "low"
      }, {
        task: "apply internship",
        desc: "send email",
        isComplete: true,
        priority: "normal"
      }];
    }

    this.loadTasks();
    this.render();
    this.addEventListeners();
    this.btnAddEventListeners();
    this.modalToggle();
    this.searchToggle();
    this.filtredPriority();
    this.deleteTask();
    this.toggleTaskStatus();
    this.filtredTask(this.tasks);
    this.itemIndex;
    this.doneTaskBtn = document.querySelectorAll("#doneTask");
    this.checkedTask = document.querySelectorAll("#list__item input");
  }

  _createClass(ToDoClass, [{
    key: "render",
    value: function render() {
      for (var i = 0; i < this.tasks.length; i++) {
        this.itemIndex = this.tasks[i];
      } // for (let i = 0; i < this.checkedTask.length; i++) {
      //   console.log(this.checedTask);
      //   if (this.checkedTask.checked) {
      //     console.log("checedTask.checked");
      //   } else {
      //     console.log("none");
      //   }
      // }

    }
  }, {
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
    value: function addTask(task, desc, priority) {
      var newTask = {
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
    }
  }, {
    key: "toggleTaskStatus",
    value: function toggleTaskStatus() {
      var _this3 = this;

      var checkedTasks = document.querySelector(".list__check-status");
      checkedTasks.addEventListener("change", function (event) {
        _this3.itemIndex.isComplete = !_this3.itemIndex.isComplete; //this.loadTasks();
      });
    }
  }, {
    key: "filtredTask",
    value: function filtredTask() {
      var _this4 = this;

      var selectElement = document.querySelector("#complite");
      var output = document.querySelector(".compliteOption");
      selectElement.addEventListener("click", function (event) {
        var outpuTarget = selectElement.options[selectElement.selectedIndex].value;

        if (outpuTarget == "done") {
          _this4.tasks.filter(function (task) {
            return task.isComplete === true;
          }).map(function (task) {
            return document.getElementById("taskList").innerHTML = _this4.generateTaskHtml(task);
          });
        } else if (outpuTarget == "all") {
          _this4.loadTasks();
        } else if (outpuTarget == "open") {
          _this4.tasks.filter(function (task) {
            return task.isComplete === false;
          }).map(function (task) {
            return document.getElementById("taskList").innerHTML = _this4.generateTaskHtml(task);
          });
        }
      });
    }
  }, {
    key: "filtredPriority",
    value: function filtredPriority() {
      var _this5 = this;

      var selectElement = document.querySelector("#prioritySelect");
      var output = document.querySelector(".compliteOption");
      selectElement.addEventListener("click", function (event) {
        var outpuTarget = selectElement.options[selectElement.selectedIndex].value;

        if (outpuTarget == "all") {
          _this5.loadTasks();
        } else if (outpuTarget == "high") {
          _this5.tasks.filter(function (task) {
            return task.priority === "high";
          }).map(function (task) {
            return document.getElementById("taskList").innerHTML = _this5.generateTaskHtml(task);
          });
        } else if (outpuTarget == "normal") {
          _this5.tasks.filter(function (task) {
            return task.priority === "normal";
          }).map(function (task) {
            return document.getElementById("taskList").innerHTML = _this5.generateTaskHtml(task);
          });
        } else if (outpuTarget == "low") {
          _this5.tasks.filter(function (task) {
            return task.priority === "low";
          }).map(function (task) {
            return document.getElementById("taskList").innerHTML = _this5.generateTaskHtml(task);
          });
        }
      });
    } // loadEventListeners() {
    //   taskList.addEventListener("click", e => {
    //     if (e.target.parentElement.classList.contains("select-filter")) {
    //       e.target.parentElement.parentElement.remove();
    //       console.log(taskList, "click");
    //     }
    //   });
    // }

  }, {
    key: "deleteTask",
    value: function deleteTask(event, itemIndex) {
      var _this6 = this;

      var deleteTask = document.querySelectorAll("#deleteTask");

      for (var i = 0; i < deleteTask.length; i++) {
        deleteTask[i].addEventListener("click", function (event) {
          console.log(deleteTask, "click");

          _this6.tasks.splice(_this6.itemIndex, 1);

          window.location.reload();

          _this6.loadTasks();
        });
      }
    }
  }, {
    key: "generateTaskHtml",
    value: function generateTaskHtml(task, index) {
      return "\n        <li class=\"list__item\">\n          <label class=\"list__checkbox\" for=\"".concat(task.id, "\">\n            <input class=\"list__check-status\" id=\"").concat(task.id, "\" type=\"checkbox\"  value=\"\" class=\"\" ").concat(task.isComplete ? "checked" : "", "></label>\n          <div class=\"list__title task-text ").concat(task.isComplete ? "complete" : "", "\">\n            ").concat(task.task, "\n          </div>\n          <div class=\"list__description\">\n          ").concat(task.desc, "\n          </div>\n          <div class=\"list__bottom-section\">\n            <div class=\"list__priority\">\n            ").concat(task.priority, "\n            </div>\n            <div class=\"dropdown \">\n              <button class=\"dropbtn\">...</button>\n              <div class=\"dropdown-content select-filter\">\n                <a href=\"#\" value=\"done  id=\"doneTask\"\">done</a>\n                <a href=\"#\" value=\"edit\" class=\"edit\">edit</a>\n                <a href=\"#\" value=\"delete\" id=\"deleteTask\">delete</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n    ");
    }
  }, {
    key: "modalToggle",
    value: function modalToggle() {
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
    }
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
      var _this7 = this;

      localStorage.setItem("TASKS", JSON.stringify(this.tasks));
      var tasksHtml = this.tasks.reduce(function (html, task, index) {
        return html += _this7.generateTaskHtml(task, index);
      }, "");
      document.getElementById("taskList").innerHTML = tasksHtml; //localStorage.clear();
    }
  }]);

  return ToDoClass;
}();

var toDo;
window.addEventListener("load", function () {
  toDo = new ToDoClass();
}); //ul list

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
  } else if (e.target.classList.contains("up")) {
    var _span = e.target.parentElement;
    var _li = _span.parentElement;
    var prevLi = _li.previousElementSibling;

    if (prevLi) {
      _li.classList.add("move-pulsate");

      list.insertBefore(_li, prevLi); //use time out to give css animation time

      setTimeout(function () {
        _li.classList.remove("move-pulsate");
      }, 800);
    } //move down

  } else if (e.target.classList.contains("down")) {
    var _span2 = e.target.parentElement;
    var _li2 = _span2.parentElement;
    var nextLi = _li2.nextElementSibling;

    if (nextLi) {
      _li2.classList.toggle("move-pulsate");

      list.insertBefore(nextLi, _li2); //use time out to give css animation time

      setTimeout(function () {
        _li2.classList.remove("move-pulsate");
      }, 800);
    } //edit

  } else if (e.target.classList.contains("edit")) {
    //if user click on edit
    //add to input text the border line
    //allow update input text by change readOnly
    var _span3 = e.target.parentElement;
    var _li3 = _span3.parentElement;

    var inputText = _li3.querySelector(".name input[type=text]");

    var saveInfo = _li3.querySelector(".name .saveInfo");

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
  insertedData = "<li>\n     <span class=\"name\">\n         <input type=\"text\" value=\"".concat(insertedData, "\" readonly=\"readonly\"> \n         <p class=\"saveInfo\">Press \"Enter\" to save</p>\n     </span>\n     <span class=\"action\">\n         <button class=\"mark fas fas fa-check\"></button>\n         <button class=\"up fas fa-angle-up\"></button>\n         <button class=\"down fas fa-angle-down\"></button>\n         <button class=\"edit fas fa-pencil-alt\"></button>\n         <button class=\"delete fas fa-trash-alt\"></button>\n      </span>\n     </li>");
  list.insertAdjacentHTML("afterbegin", insertedData);
  formAdd.querySelector("input[type=text]").value = "";
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
create - account - title - ru;

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