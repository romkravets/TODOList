export class ModalWindow {
  constructor() {
    this.render();
  }

  render() {
    const modal = document.querySelector("#modalToggle");

    // const modalHtml = `
    //           <form action="#" class="modal__content" id="form-add">
    //           <label for="addTask">
    //             Title:<input
    //               type="text"
    //               placeholder="Title"
    //               class="modal__title"
    //               id="addTask"
    //             />
    //           </label>
    //           <label for="addDesc">
    //             Desctiption:
    //             <textarea
    //               type="text"
    //               placeholder="Desctiption"
    //               class="modal__desctiption"
    //               id="addDesc"
    //             ></textarea>
    //           </label>
    //           <div class="modal__priority">
    //             <select id="priority" class="modal__select">
    //               <option value="high">High</option>
    //               <option value="normal">Normal</option>
    //               <option value="low">Low</option>
    //             </select>
    //           </div>
    //           <div class="modal__btn-block">
    //             <button class="modal__cancel modal__btn">Cancel</button>
    //             <button id="btnTask" class="modal__btn">Save</button>
    //           </div>
    //         </form>
    //      `;
    // modal.innerHTML += modalHtml;

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
