import { TodoList } from "./scripts/toDoList";

import "./index.scss";

const todoDataItems = [
  {
    title: "execute test task",
    descriprion: "Ciklum internship",
    isOpen: true,
    priority: "high"
  },

  {
    title: "lern javascript",
    descriprion: "",
    isOpen: true,
    priority: "low"
  },

  {
    title: "apply internship",
    descriprion: "send email",
    isOpen: false,
    priority: "normal"
  }
];

new TodoList(document.querySelector("#todoList"), todoDataItems);
