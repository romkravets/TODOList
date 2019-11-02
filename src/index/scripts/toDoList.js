const list = document.getElementById("list");
const MODAL_FORM = document.querySelector("#modalToggle");
const TOP_FORM = document.querySelector("#topForm");
const HEADER = document.querySelector("#header");

export class ToDoList {
  constructor() {
    this.render();
  }

  render() {
    const headerHtml = `
    <div class="container">
        <h1>TODOList</h1>
    </div>
   `;
    HEADER.innerHTML += headerHtml;
    const topFormHtml = `
          <form action="#" id="searchForm" class="form">
          <input
            class="form__search"
            type="text"
            placeholder="search by title"
            value=""
          />
          <select id="complite" class="form__complite">
            <option value="all" class="compliteOption" selected>all</option>
            <option value="open" class="compliteOption">open</option>
            <option value="done" id="doneTask">done</option>
          </select>
          <select id="prioritySelect" class="form__priority">
            <option value="all" class="compliteOption" selected>all</option>
            <option value="high" class="compliteOption">high</option>
            <option value="normal" class="compliteOption">normal</option>
            <option value="low" class="compliteOption">low</option>
          </select>
          <button id="addBtn" class="form__btn">Create</button>
        </form>
         `;
    TOP_FORM.innerHTML += topFormHtml;

    const modalHtml = `
    <form action="#" class="modal__content" id="form-add">
        <label for="addTask">
          Title:<input
            type="text"
            placeholder="Title"
            class="modal__title"
            id="addTask"
          />
        </label>
        <label for="addDesc">
          Desctiption:
          <textarea
            type="text"
            placeholder="Desctiption"
            class="modal__desctiption"
            id="addDesc"
          ></textarea>
        </label>
        <div class="modal__priority">
          <select id="priority" class="modal__select">
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div class="modal__btn-block">
          <button class="modal__cancel modal__btn">Cancel</button>
          <button id="btnTask" class="modal__btn">Save</button>
        </div>
      </form>
    `;
    MODAL_FORM.innerHTML += modalHtml;

    const selectElement = document.querySelector("#complite");
    selectElement.addEventListener("click", e => {
      const outpuTarget =
        selectElement.options[selectElement.selectedIndex].value;

      const listAllTasks = document.querySelectorAll("#list li");
      Array.from(listAllTasks).forEach(list => {
        if (outpuTarget === "done") {
          const completeTitle = list.querySelector(".list__title");
          const complete = completeTitle.classList.contains("complete");
          if (complete) {
            list.style.display = "flex";
          } else if (!complete) {
            list.style.display = "none";
          }
        } else if (outpuTarget === "open") {
          const completeTitle = list.querySelector(".list__title");
          const complete = completeTitle.classList.contains("complete");
          if (!complete) {
            list.style.display = "flex";
          } else if (complete) {
            list.style.display = "none";
          }
        } else if (outpuTarget === "all") {
          list.style.display = "flex";
        }
      });
    });

    const selectElementPriority = document.querySelector("#prioritySelect");
    selectElementPriority.addEventListener("click", e => {
      const outpuTargetPriority =
        selectElementPriority.options[selectElementPriority.selectedIndex]
          .value;

      const listAllTasks = document.querySelectorAll("#list li");
      Array.from(listAllTasks).forEach(list => {
        if (outpuTargetPriority === "high") {
          const priority = list.querySelector(".list__priority");
          const priorityComplete = priority.value;
          console.log(priorityComplete);
          if (priorityComplete === "high") {
            list.style.display = "flex";
          } else {
            list.style.display = "none";
          }
        } else if (outpuTargetPriority === "normal") {
          const priority = list.querySelector(".list__priority");
          const priorityComplete = priority.value;
          if (priorityComplete === "normal") {
            list.style.display = "flex";
          } else {
            list.style.display = "none";
          }
        } else if (outpuTargetPriority === "low") {
          const priority = list.querySelector(".list__priority");
          const priorityComplete = priority.value;
          if (priorityComplete === "low") {
            list.style.display = "flex";
          } else {
            list.style.display = "none";
          }
        } else if (outpuTargetPriority === "all") {
          list.style.display = "flex";
        }
      });
    });

    list.addEventListener("click", e => {
      if (e.target.classList.contains("delete")) {
        const span = e.target.parentElement;
        const li = span.parentElement;
        li.classList.add("hide");
        setTimeout(() => {
          list.removeChild(li);
        }, 600);
      } else if (e.target.classList.contains("mark")) {
        const actionSpan = e.target.parentElement.previousElementSibling;
        const checkboxElement = actionSpan.querySelector(
          "input[type=checkbox]"
        );
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

        inputText.addEventListener("keypress", e => {
          const key = e.which || e.keyCode;
          if (key === 13) {
            inputText.readOnly = true;
            inputText.style.cursor = "context-menu";
            inputText.classList.remove("input-border");
          }
        });
        inputDescription.addEventListener("keypress", e => {
          const key = e.which || e.keyCode;
          if (key === 13) {
            inputDescription.readOnly = true;
            inputDescription.style.cursor = "context-menu";
            inputDescription.classList.remove("input-border");
          }
        });
        inputPriority.addEventListener("keypress", e => {
          const key = e.which || e.keyCode;
          if (key === 13) {
            inputPriority.readOnly = true;
            inputPriority.style.cursor = "context-menu";
            inputPriority.classList.remove("input-border");
          }
        });
      }
    });

    const formAdd = document.forms["form-add"];
    formAdd.addEventListener("submit", e => {
      e.preventDefault();
      let insertedData = formAdd.querySelector("#addTask").value;
      let insertedDescription = formAdd.querySelector("#addDesc").value;
      let insertedPriority = formAdd.querySelector("#priority").value;
      insertedData = `<li class="list__item">
                  <span class="name">
                      <label class="list__checkbox">
                          <input class="list__check-status" type="checkbox" class="">
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
      MODAL_FORM.style.display = "none";
    });

    const searchForm = document.querySelector(".form__search");

    searchForm.addEventListener("keyup", e => {
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
  }
}
