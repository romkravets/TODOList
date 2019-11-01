export class ModalWindow {
  constructor() {
    this.render();
  }

  render() {
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
