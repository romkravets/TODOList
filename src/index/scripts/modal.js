const MODAl = document.querySelector("#modalToggle");
export class ModalWindow {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector("#addBtn").addEventListener("click", e => {
      e.preventDefault();
      MODAl.style.display = "block";
    });

    document.querySelector(".modal__cancel").addEventListener("click", e => {
      e.preventDefault();
      MODAl.style.display = "none";
    });

    window.addEventListener("click", e => {
      if (event.target == MODAl) {
        e.preventDefault();
        MODAl.style.display = "none";
      }
    });
  }
}
