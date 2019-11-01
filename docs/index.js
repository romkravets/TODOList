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


var list = document.getElementById("list");

var ToDoClass =
/*#__PURE__*/
function () {
  function ToDoClass() {
    _classCallCheck(this, ToDoClass);

    this.render();
  }

  _createClass(ToDoClass, [{
    key: "render",
    value: function render() {
      list.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
          var span = e.target.parentElement;
          var li = span.parentElement;
          li.classList.add("hide");
          setTimeout(function () {
            list.removeChild(li);
          }, 600);
        } else if (e.target.classList.contains("mark")) {
          var actionSpan = e.target.parentElement.previousElementSibling;
          var checkboxElement = actionSpan.querySelector("input[type=checkbox]");
          console.log(checkboxElement);
          actionSpan.querySelector("input[type=text]").classList.toggle("complete");
          checkboxElement.checked = !checkboxElement.checked;
        } else if (e.target.classList.contains("edit")) {
          var _span = e.target.parentElement;
          var _li = _span.parentElement;

          var inputText = _li.querySelector(".name .list__title");

          var inputDescription = _li.querySelector(".name .list__description");

          var inputPriority = _li.querySelector(".name .list__priority");

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
        insertedData = "<li class=\"list__item\">\n              <span class=\"name\">\n                  <label class=\"list__checkbox\">\n                      <input class=\"list__check-status\" type=\"checkbox\"  value=\"\" class=\"\">\n                  </label>\n                  <input class=\"list__title task-text\" type=\"text\" value=\"".concat(insertedData, "\" readonly=\"readonly\">\n                  <input class=\"list__description\" type=\"text\" value=\"").concat(insertedDescription, "\" readonly=\"readonly\">\n                  <input class=\"list__priority\" type=\"text\" value=\"").concat(insertedPriority, "\" readonly=\"readonly\">\n              </span>\n              <div class=\"action\">\n                  <button class=\"mark\">mark</button>\n                  <button class=\"edit\">edit</button>\n                  <button class=\"delete\">delete</button>\n              </div>\n              </li>");
        list.insertAdjacentHTML("afterbegin", insertedData);
        formAdd.querySelector("input[type=text]").value = "";
        formAdd.querySelector("#addDesc").value = "";
        modal.style.display = "none";
      });
      var searchForm = document.querySelector(".form__search");
      searchForm.addEventListener("keyup", function (e) {
        var inputVal = e.target.value.toLowerCase();
        var items = list.getElementsByTagName("li");
        Array.from(items).forEach(function (item) {
          var itemName = item.querySelector(".list__title").value;

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