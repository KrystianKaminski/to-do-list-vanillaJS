class App {
  constructor(container) {
    this.container = document.querySelector(container) || document.body;
    this.box = new InputBox(this.container);
    this.box.render();
  }
}

class InputBox {
  constructor(parent) {
    this.parent = parent;
  }
  render() {
    const taskBox = document.createElement("div");
    const title = document.createElement("h2");
    const inputBox = document.createElement("div");
    const input = document.createElement("input");
    const inputBorder = document.createElement("span");
    const button = document.createElement("button");

    taskBox.setAttribute("class", "add-task-box");
    title.setAttribute("class", "add-task-box__title");
    title.innerText = "Please add your task";
    inputBox.setAttribute("class", "add-task-box__input-box");
    input.setAttribute("class", "add-task-box__input");
    input.setAttribute("placeholder", "Go to the shop...");
    inputBorder.setAttribute("class", "add-task-box__input-border");
    button.setAttribute("class", "add-task-box__button");
    button.innerText = "Add task to list";
    this.parent.appendChild(taskBox);
    taskBox.appendChild(title);
    taskBox.appendChild(inputBox);
    inputBox.appendChild(input);
    inputBox.appendChild(inputBorder);
    taskBox.appendChild(button);
  }
}
const app = new App(".container");
