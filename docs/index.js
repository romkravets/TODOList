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
/* harmony import */ var _scripts_togglerControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/togglerControl */ "./src/index/scripts/togglerControl.js");
/* harmony import */ var _scripts_toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/toggler */ "./src/index/scripts/toggler.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




var todoDataItems = [{
  title: "execute test task",
  descriprion: "Ciklum internship",
  isOpen: true,
  priority: "high"
}, {
  title: "lern javascript",
  descriprion: "",
  isOpen: true,
  priority: "low"
}, {
  title: "apply internship",
  descriprion: "send email",
  isOpen: false,
  priority: "normal"
}];
new _scripts_toDoList__WEBPACK_IMPORTED_MODULE_0__["TodoList"](document.querySelector("#todoList"), todoDataItems);
new _scripts_toggler__WEBPACK_IMPORTED_MODULE_2__["Toggler"](document.querySelector("#togglerFirst"), "HELLOW WORLD!", "green");
new _scripts_togglerControl__WEBPACK_IMPORTED_MODULE_1__["TogglerControl"](document.querySelector("#togglerController"));

/***/ }),

/***/ "./src/index/index.scss":
/*!******************************!*\
  !*** ./src/index/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index/scripts/toDoList.js":
/*!***************************************!*\
  !*** ./src/index/scripts/toDoList.js ***!
  \***************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return TodoList; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList(rootElement, todoData) {
    _classCallCheck(this, TodoList);

    this.rootElement = rootElement;
    this.todoData = todoData;
    this.todoItem;
    this.saveBtn = document.querySelector(".savelist");
    this.render();
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.todoData.forEach(function (todo) {
        _this.todoItem = "\n       <div class=\"todo\">\n         <h3>".concat(todo.title, "</h3>\n         <p>").concat(todo.descriprion, "</p>\n         <div>\n            <div>\n            <span>").concat(todo.priority, "</span>\n            </div>\n         <select>\n            <option value=\"done\">done</option>\n            <option value=\"edit\">edit</option>\n            <option value=\"delete\">delete</option>\n         </select>\n         </div>\n       </div>");
        _this.rootElement.innerHTML += _this.todoItem;
      });
      this.saveBtn.addEventListener("click", function () {
        return _this.addToDo();
      });
      var modal = document.querySelector("#ModalWindow");
      var btnToDo = document.querySelector("#addBtn");
      var span = document.getElementsByClassName("cancel")[0];
      btnToDo.addEventListener("click", function () {
        modal.style.display = "block";
      });
      span.addEventListener("click", function () {
        modal.style.display = "none";
      });
      window.addEventListener("click", function () {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    }
  }, {
    key: "addToDo",
    value: function addToDo() {
      this.rootElement.push(console.log(this.todoData));
    }
  }]);

  return TodoList;
}();

/***/ }),

/***/ "./src/index/scripts/toggler.js":
/*!**************************************!*\
  !*** ./src/index/scripts/toggler.js ***!
  \**************************************/
/*! exports provided: Toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggler", function() { return Toggler; });
/* harmony import */ var _styles_targget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/targget.scss */ "./src/index/styles/targget.scss");
/* harmony import */ var _styles_targget_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_targget_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Toggler =
/*#__PURE__*/
function () {
  function Toggler(rootElement, title) {
    var backgroundColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "red";

    _classCallCheck(this, Toggler);

    this.rootElement = rootElement;
    this.title = title;
    this.backgroundColor = backgroundColor;
    this.render();
    this.isEnable = false;
  }

  _createClass(Toggler, [{
    key: "render",
    value: function render() {
      var _this = this;

      console.log("toggle");
      this.btn = document.createElement("button");
      this.btn.classList.add("toggler");
      this.btn.textContent = this.title;
      this.btn.addEventListener("click", function () {
        return _this.toggle();
      });
      this.rootElement.appendChild(this.btn);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isEnable) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      this.btn.style.backgroundColor = this.backgroundColor;
      this.isEnable = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.btn.style.backgroundColor = "";
      this.isEnable = false;
    }
  }]);

  return Toggler;
}();

/***/ }),

/***/ "./src/index/scripts/togglerControl.js":
/*!*********************************************!*\
  !*** ./src/index/scripts/togglerControl.js ***!
  \*********************************************/
/*! exports provided: TogglerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglerControl", function() { return TogglerControl; });
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggler */ "./src/index/scripts/toggler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TogglerControl =
/*#__PURE__*/
function () {
  function TogglerControl(rootElement) {
    _classCallCheck(this, TogglerControl);

    this.rootElement = rootElement;
    this.togglers = [];
    this.render();
  }

  _createClass(TogglerControl, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.addBtn = document.createElement('button');
      this.enableAllBtn = document.createElement('button');
      this.disableAllBtn = document.createElement('button');
      this.contentBlock = document.createElement('div');
      this.counterElement = document.createElement('span');
      this.addBtn.textContent = 'ADD';
      this.enableAllBtn.textContent = 'TOGGLER ALL'; // this.disableAllBtn.textContent = 'DESABLE ALL';

      this.counterElement.textContent = 0;
      this.contentBlock.classList.add('div');
      this.addBtn.addEventListener('click', function () {
        return _this.addToggler();
      }); // this.disableAllBtn.addEventListener('click', () => this.disableAll());
      // this.enableAllBtn.addEventListener('click', () => this.enableAll());

      this.enableAllBtn.addEventListener('click', function () {
        return _this.toggleAll();
      });
      this.rootElement.appendChild(this.addBtn);
      this.rootElement.appendChild(this.enableAllBtn); //this.rootElement.appendChild(this.disableAllBtn);

      this.rootElement.appendChild(this.counterElement);
      this.rootElement.appendChild(this.contentBlock);
    }
  }, {
    key: "addToggler",
    value: function addToggler() {
      this.togglers.push(new _toggler__WEBPACK_IMPORTED_MODULE_0__["Toggler"](this.contentBlock, 'TEXT', this.generateColor()));
      this.counterElement.textContent = this.togglers.length;
    }
  }, {
    key: "generateColor",
    value: function generateColor() {
      var getRandomValue = function getRandomValue() {
        return Math.round(Math.random() * (0 - 255) + 255);
      };

      return "rgb(".concat(getRandomValue(), ", ").concat(getRandomValue(), ", ").concat(getRandomValue(), ")");
    }
  }, {
    key: "toggleAll",
    value: function toggleAll() {
      var isSomeEnabled = false;
      this.togglers.forEach(function (toggler) {
        console.log(toggler.isEnable);

        if (toggler.isEnable) {
          isSomeEnabled = true;
        }
      });

      if (isSomeEnabled) {
        this.disableAll();
      } else {
        this.enableAll();
      }
    }
  }, {
    key: "disableAll",
    value: function disableAll() {
      this.togglers.forEach(function (toggler) {
        toggler.disable();
      });
    }
  }, {
    key: "enableAll",
    value: function enableAll() {
      this.togglers.forEach(function (toggler) {
        toggler.enable();
      });
    }
  }]);

  return TogglerControl;
}();

/***/ }),

/***/ "./src/index/styles/targget.scss":
/*!***************************************!*\
  !*** ./src/index/styles/targget.scss ***!
  \***************************************/
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