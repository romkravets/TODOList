const TO_DO_LIST = document.getElementById("list");
const MODAL_FORM = document.querySelector("#modalToggle");
const TOP_FORM = document.querySelector("#topForm");
const HEADER = document.querySelector("#header");
const FOOTER = document.querySelector("#footer");

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
            maxlength="20"
          />
        </label>
        <label for="addDesc">
          Desctiption:
          <textarea
            type="text"
            placeholder="Desctiption"
            class="modal__desctiption"
            id="addDesc"
            maxlength="25"
          ></textarea>
        </label>
        <label for="priority">Priority:</label>
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

    const footerHtml = `
      <div class="container">
        <span class="author">Roman Kravets</span>
      </div>
    `;
    FOOTER.innerHTML += footerHtml;

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

    TO_DO_LIST.addEventListener("click", e => {
      if (e.target.classList.contains("delete")) {
        const targetParent = e.target.parentElement;
        const li = targetParent.parentElement;
        li.classList.add("hide");
        setTimeout(() => {
          TO_DO_LIST.removeChild(li);
        }, 600);
      } else if (e.target.classList.contains("mark")) {
        const actionSpan = e.target.parentElement.previousElementSibling;
        const targetParent = e.target.parentElement;
        const li = targetParent.parentElement;
        if (li.classList.contains("list__item_complete")) {
          li.classList.remove("list__item_complete");
        } else {
          li.classList.add("list__item_complete");
        }
        const checkboxElement = actionSpan.querySelector(
          "input[type=checkbox]"
        );
        actionSpan
          .querySelector("input[type=text]")
          .classList.toggle("complete");
        checkboxElement.checked = !checkboxElement.checked;
      } else if (e.target.classList.contains("edit")) {
        const targetParent = e.target.parentElement;
        const li = targetParent.parentElement;
        const inputText = li.querySelector(".list__name .list__title");
        const inputDescription = li.querySelector(
          ".list__name .list__description"
        );
        const inputPriority = li.querySelector(".list__name .list__priority");
        const saveInfo = li.querySelector(".list__name .list__name_save-info");
        inputText.classList.toggle("input-border");
        inputDescription.classList.toggle("input-border");
        inputPriority.classList.toggle("input-border");
        inputText.style.cursor = "text";
        inputDescription.style.cursor = "text";
        inputPriority.style.cursor = "text";
        inputText.readOnly = false;
        inputDescription.readOnly = false;
        inputPriority.readOnly = false;
        saveInfo.style.display = "block";

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
            saveInfo.style.display = "none";
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
                  <div class="list__name">
                      <label class="list__checkbox">
                          <input class="list__check-status" type="checkbox" class="">
                      </label>
                      <input class="list__title task-text" type="text" value="${insertedData}" readonly="readonly" maxlength="25">
                      <input class="list__description" type="text" value="${insertedDescription}" readonly="readonly"  maxlength="25">
                      <input class="list__priority" id="listPriority" type="text" value="${insertedPriority}" readonly="readonly">
                      <p class="list__name_save-info">Press "Enter" to save</p>
                  </div>
                  <div class="list__buttons dropdown-content">
                      <button class="list__button mark">done</button>
                      <button class="list__button edit">edit</button>
                      <button class="list__button delete">delete</button>
                  </div>
              </li>`;
      TO_DO_LIST.insertAdjacentHTML("afterbegin", insertedData);
      formAdd.querySelector("input[type=text]").value = "";
      formAdd.querySelector("#addDesc").value = "";
      MODAL_FORM.style.display = "none";
    });

    const searchForm = document.querySelector(".form__search");

    searchForm.addEventListener("keyup", e => {
      const inputVal = e.target.value.toLowerCase();
      const items = TO_DO_LIST.getElementsByTagName("li");
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
