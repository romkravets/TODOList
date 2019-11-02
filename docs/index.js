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
/* harmony import */ var _scripts_toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/toDoList */ "./src/index/scripts/toDoList.js");
/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/modal */ "./src/index/scripts/modal.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



new _scripts_toDoList__WEBPACK_IMPORTED_MODULE_0__["ToDoList"]();
new _scripts_modal__WEBPACK_IMPORTED_MODULE_1__["ModalWindow"]();

/***/ }),

/***/ "./src/index/index.scss":
/*!******************************!*\
  !*** ./src/index/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/scripts/modal.js":
/*!************************************!*\
  !*** ./src/index/scripts/modal.js ***!
  \************************************/
/*! exports provided: ModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return ModalWindow; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MODAl = document.querySelector("#modalToggle");
var ModalWindow =
/*#__PURE__*/
function () {
  function ModalWindow() {
    _classCallCheck(this, ModalWindow);

    this.render();
  }

  _createClass(ModalWindow, [{
    key: "render",
    value: function render() {
      document.querySelector("#addBtn").addEventListener("click", function (e) {
        e.preventDefault();
        MODAl.style.display = "block";
      });
      document.querySelector(".modal__cancel").addEventListener("click", function (e) {
        e.preventDefault();
        MODAl.style.display = "none";
      });
      window.addEventListener("click", function (e) {
        if (event.target == MODAl) {
          e.preventDefault();
          MODAl.style.display = "none";
        }
      });
    }
  }]);

  return ModalWindow;
}();

/***/ }),

/***/ "./src/index/scripts/toDoList.js":
/*!***************************************!*\
  !*** ./src/index/scripts/toDoList.js ***!
  \***************************************/
/*! exports provided: ToDoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoList", function() { return ToDoList; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TO_DO_LIST = document.getElementById("list");
var MODAL_FORM = document.querySelector("#modalToggle");
var TOP_FORM = document.querySelector("#topForm");
var HEADER = document.querySelector("#header");
var FOOTER = document.querySelector("#footer");
var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    _classCallCheck(this, ToDoList);

    this.render();
  }

  _createClass(ToDoList, [{
    key: "render",
    value: function render() {
      var headerHtml = "\n    <div class=\"container\">\n        <h1>TODOList</h1>\n    </div>\n   ";
      HEADER.innerHTML += headerHtml;
      var topFormHtml = "\n          <form action=\"#\" id=\"searchForm\" class=\"form\">\n          <input\n            class=\"form__search\"\n            type=\"text\"\n            placeholder=\"search by title\"\n            value=\"\"\n          />\n            <select id=\"complite\" class=\"form__complite\">\n              <option value=\"all\" class=\"compliteOption\" selected>all</option>\n              <option value=\"open\" class=\"compliteOption\">open</option>\n              <option value=\"done\" id=\"doneTask\">done</option>\n            </select>\n            <select id=\"prioritySelect\" class=\"form__priority\">\n              <option value=\"all\" class=\"compliteOption\" selected>all</option>\n              <option value=\"high\" class=\"compliteOption\">high</option>\n              <option value=\"normal\" class=\"compliteOption\">normal</option>\n              <option value=\"low\" class=\"compliteOption\">low</option>\n            </select>\n          <button id=\"addBtn\" class=\"form__btn\">Create</button>\n        </form>\n         ";
      TOP_FORM.innerHTML += topFormHtml;
      var modalHtml = "\n    <form action=\"#\" class=\"modal__content\" id=\"form-add\">\n        <label for=\"addTask\">\n          Title:<input\n            type=\"text\"\n            placeholder=\"Title\"\n            class=\"modal__title\"\n            id=\"addTask\"\n            maxlength=\"20\"\n          />\n        </label>\n        <label for=\"addDesc\">\n          Desctiption:\n          <textarea\n            type=\"text\"\n            placeholder=\"Desctiption\"\n            class=\"modal__desctiption\"\n            id=\"addDesc\"\n            maxlength=\"25\"\n          ></textarea>\n        </label>\n        <label for=\"priority\">Priority:</label>\n        <div class=\"modal__priority\">\n          <select id=\"priority\" class=\"modal__select\">\n            <option value=\"high\">High</option>\n            <option value=\"normal\">Normal</option>\n            <option value=\"low\">Low</option>\n          </select>\n        </div>\n        <div class=\"modal__btn-block\">\n          <button class=\"modal__cancel modal__btn\">Cancel</button>\n          <button id=\"btnTask\" class=\"modal__btn\">Save</button>\n        </div>\n      </form>\n    ";
      MODAL_FORM.innerHTML += modalHtml;
      var footerHtml = "\n      <div class=\"container\">\n        <span class=\"author\">Roman Kravets</span>\n      </div>\n    ";
      FOOTER.innerHTML += footerHtml;
      var selectElement = document.querySelector("#complite");
      selectElement.addEventListener("click", function (e) {
        var outpuTarget = selectElement.options[selectElement.selectedIndex].value;
        var listAllTasks = document.querySelectorAll("#list li");
        Array.from(listAllTasks).forEach(function (list) {
          if (outpuTarget === "done") {
            var completeTitle = list.querySelector(".list__title");
            var complete = completeTitle.classList.contains("complete");

            if (complete) {
              list.style.display = "flex";
            } else if (!complete) {
              list.style.display = "none";
            }
          } else if (outpuTarget === "open") {
            var _completeTitle = list.querySelector(".list__title");

            var _complete = _completeTitle.classList.contains("complete");

            if (!_complete) {
              list.style.display = "flex";
            } else if (_complete) {
              list.style.display = "none";
            }
          } else if (outpuTarget === "all") {
            list.style.display = "flex";
          }
        });
      });
      var selectElementPriority = document.querySelector("#prioritySelect");
      selectElementPriority.addEventListener("click", function (e) {
        var outpuTargetPriority = selectElementPriority.options[selectElementPriority.selectedIndex].value;
        var listAllTasks = document.querySelectorAll("#list li");
        Array.from(listAllTasks).forEach(function (list) {
          if (outpuTargetPriority === "high") {
            var priority = list.querySelector(".list__priority");
            var priorityComplete = priority.value;
            console.log(priorityComplete);

            if (priorityComplete === "high") {
              list.style.display = "flex";
            } else {
              list.style.display = "none";
            }
          } else if (outpuTargetPriority === "normal") {
            var _priority = list.querySelector(".list__priority");

            var _priorityComplete = _priority.value;

            if (_priorityComplete === "normal") {
              list.style.display = "flex";
            } else {
              list.style.display = "none";
            }
          } else if (outpuTargetPriority === "low") {
            var _priority2 = list.querySelector(".list__priority");

            var _priorityComplete2 = _priority2.value;

            if (_priorityComplete2 === "low") {
              list.style.display = "flex";
            } else {
              list.style.display = "none";
            }
          } else if (outpuTargetPriority === "all") {
            list.style.display = "flex";
          }
        });
      });
      TO_DO_LIST.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
          var targetParent = e.target.parentElement;
          var li = targetParent.parentElement;
          li.classList.add("hide");
          setTimeout(function () {
            TO_DO_LIST.removeChild(li);
          }, 600);
        } else if (e.target.classList.contains("mark")) {
          var actionSpan = e.target.parentElement.previousElementSibling;
          var _targetParent = e.target.parentElement;
          var _li = _targetParent.parentElement;

          if (_li.classList.contains("list__item_complete")) {
            _li.classList.remove("list__item_complete");
          } else {
            _li.classList.add("list__item_complete");
          }

          var checkboxElement = actionSpan.querySelector("input[type=checkbox]");
          actionSpan.querySelector("input[type=text]").classList.toggle("complete");
          checkboxElement.checked = !checkboxElement.checked;
        } else if (e.target.classList.contains("edit")) {
          var _targetParent2 = e.target.parentElement;
          var _li2 = _targetParent2.parentElement;

          var inputText = _li2.querySelector(".list__name .list__title");

          var inputDescription = _li2.querySelector(".list__name .list__description");

          var inputPriority = _li2.querySelector(".list__name .list__priority");

          inputText.classList.toggle("input-border");
          inputDescription.classList.toggle("input-border");
          inputPriority.classList.toggle("input-border");
          inputText.style.cursor = "text";
          inputDescription.style.cursor = "text";
          inputPriority.style.cursor = "text";
          inputText.readOnly = false;
          inputDescription.readOnly = false;
          inputPriority.readOnly = false;
          inputText.addEventListener("keypress", function (e) {
            var key = e.which || e.keyCode;

            if (key === 13) {
              inputText.readOnly = true;
              inputText.style.cursor = "context-menu";
              inputText.classList.remove("input-border");
            }
          });
          inputDescription.addEventListener("keypress", function (e) {
            var key = e.which || e.keyCode;

            if (key === 13) {
              inputDescription.readOnly = true;
              inputDescription.style.cursor = "context-menu";
              inputDescription.classList.remove("input-border");
            }
          });
          inputPriority.addEventListener("keypress", function (e) {
            var key = e.which || e.keyCode;

            if (key === 13) {
              inputPriority.readOnly = true;
              inputPriority.style.cursor = "context-menu";
              inputPriority.classList.remove("input-border");
            }
          });
        }
      });
      var formAdd = document.forms["form-add"];
      formAdd.addEventListener("submit", function (e) {
        e.preventDefault();
        var insertedData = formAdd.querySelector("#addTask").value;
        var insertedDescription = formAdd.querySelector("#addDesc").value;
        var insertedPriority = formAdd.querySelector("#priority").value;
        insertedData = "<li class=\"list__item\">\n                  <div class=\"list__name\">\n                      <label class=\"list__checkbox\">\n                          <input class=\"list__check-status\" type=\"checkbox\" class=\"\">\n                      </label>\n                      <input class=\"list__title task-text\" type=\"text\" value=\"".concat(insertedData, "\" readonly=\"readonly\" maxlength=\"25\">\n                      <input class=\"list__description\" type=\"text\" value=\"").concat(insertedDescription, "\" readonly=\"readonly\"  maxlength=\"25\">\n                      <input class=\"list__priority\" id=\"listPriority\" type=\"text\" value=\"").concat(insertedPriority, "\" readonly=\"readonly\">\n                  </div>\n                  <div class=\"list__buttons dropdown-content\">\n                      <button class=\"list__button mark\">done</button>\n                      <button class=\"list__button edit\">edit</button>\n                      <button class=\"list__button delete\">delete</button>\n                  </div>\n              </li>");
        TO_DO_LIST.insertAdjacentHTML("afterbegin", insertedData);
        formAdd.querySelector("input[type=text]").value = "";
        formAdd.querySelector("#addDesc").value = "";
        MODAL_FORM.style.display = "none";
      });
      var searchForm = document.querySelector(".form__search");
      searchForm.addEventListener("keyup", function (e) {
        var inputVal = e.target.value.toLowerCase();
        var items = TO_DO_LIST.getElementsByTagName("li");
        Array.from(items).forEach(function (item) {
          var itemName = item.querySelector(".list__title").value;

          if (itemName.toLowerCase().indexOf(inputVal) != -1) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
  }]);

  return ToDoList;
}();

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