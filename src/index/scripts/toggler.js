import "../styles/targget.scss";

export class Toggler {
  constructor(rootElement, title, backgroundColor = "red") {
    this.rootElement = rootElement;
    this.title = title;
    this.backgroundColor = backgroundColor;
    this.render();
    this.isEnable = false;
  }

  render() {
    console.log("toggle");
    this.btn = document.createElement("button");
    this.btn.classList.add("toggler");
    this.btn.textContent = this.title;
    this.btn.addEventListener("click", () => this.toggle());
    this.rootElement.appendChild(this.btn);
  }

  toggle() {
    if (this.isEnable) {
      this.disable();
    } else {
      this.enable();
    }
  }

  enable() {
    this.btn.style.backgroundColor = this.backgroundColor;
    this.isEnable = true;
  }

  disable() {
    this.btn.style.backgroundColor = "";
    this.isEnable = false;
  }
}
