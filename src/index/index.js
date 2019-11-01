import "./index.scss";
const list = document.getElementById("list");

class ToDoClass {
  constructor() {
    this.render();
  }

  render() {
    list.addEventListener("click", function(e) {
      if (e.target.classList.contains("delete")) {
        const span = e.target.parentElement;
        const li = span.parentElement;
        li.classList.add("hide");
        setTimeout(() => {
          list.removeChild(li);
        }, 600);
      } else if (e.target.classList.contains("mark")) {
        const actionSpan = e.target.parentElement.previousElementSibling;
        let checkboxElement = actionSpan.querySelector("input[type=checkbox]");
        console.log(checkboxElement);
        actionSpan
          .querySelector("input[type=text]")
          .classList.toggle("complete");
        checkboxElement.checked = !checkboxElement.checked;
      } else if (e.target.classList.contains("edit")) {
        const span = e.target.parentElement;
        const li = span.parentElement;
        const inputText = li.querySelector(".name .list__title");
        const inputDescription = li.querySelector(".name .list__description");
        const inputPriority = li.querySelector(".name .list__priority");
        inputText.classList.toggle("input-border");
        inputDescription.classList.toggle("input-border");
        inputPriority.classList.toggle("input-border");
        inputText.style.cursor = "text";
        inputDescription.style.cursor = "text";
        inputPriority.style.cursor = "text";
        inputText.readOnly = false;
        inputDescription.readOnly = false;
        inputPriority.readOnly = false;

        inputText.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            inputText.readOnly = true;
            inputText.style.cursor = "context-menu";
            inputText.classList.remove("input-border");
          }
        });
        inputDescription.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            inputDescription.readOnly = true;
            inputDescription.style.cursor = "context-menu";
            inputDescription.classList.remove("input-border");
          }
        });
        inputPriority.addEventListener("keypress", function(e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            inputPriority.readOnly = true;
            inputPriority.style.cursor = "context-menu";
            inputPriority.classList.remove("input-border");
          }
        });
      }
    });

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
              </span>
              <div class="action">
                  <button class="mark">mark</button>
                  <button class="edit">edit</button>
                  <button class="delete">delete</button>
              </div>
              </li>`;
      list.insertAdjacentHTML("afterbegin", insertedData);
      formAdd.querySelector("input[type=text]").value = "";
      formAdd.querySelector("#addDesc").value = "";
      modal.style.display = "none";
    });

    const searchForm = document.querySelector(".form__search");

    searchForm.addEventListener("keyup", function(e) {
      const inputVal = e.target.value.toLowerCase();
      const items = list.getElementsByTagName("li");
      Array.from(items).forEach(function(item) {
        const itemName = item.querySelector(".list__title").value;
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
}

let toDo;

window.addEventListener("load", () => {
  toDo = new ToDoClass();
});
