class App {
  constructor(container) {
    this.container = document.querySelector(container) || document.body;
    this.box = new InputBox(this.container);
    this.list = new List(this.container);
    this.box.render();
    this.listParent = this.list.render();
    this.tasks = [];

    this.addTaskListener();
  }

  addTask() {
    const task = new Task(this.box.readValue());
    this.tasks.push(task);
    this.listParent.appendChild(task.render());
  }

  addTaskListener() {
    this.box.button.addEventListener("click", () => {
      this.addTask();
      this.render();
    });
  }

  render() {
    this.tasks.forEach(task => {
      task.render();
    });
  }
}

class InputBox {
  constructor(parent) {
    this.parent = parent;
    this.taskBox = document.createElement("div");
    this.title = document.createElement("h2");
    this.inputBox = document.createElement("div");
    this.input = document.createElement("input");
    this.inputBorder = document.createElement("span");
    this.button = document.createElement("button");
  }
  render() {
    this.taskBox.setAttribute("class", "add-task-box");
    this.title.setAttribute("class", "add-task-box__title");
    this.title.innerText = "Please add your task";
    this.inputBox.setAttribute("class", "add-task-box__input-box");
    this.input.setAttribute("class", "add-task-box__input");
    this.input.setAttribute("placeholder", "Go to the shop...");
    this.inputBorder.setAttribute("class", "add-task-box__input-border");
    this.button.setAttribute("class", "add-task-box__button");
    this.button.innerText = "Add task to list";
    this.parent.appendChild(this.taskBox);
    this.taskBox.appendChild(this.title);
    this.taskBox.appendChild(this.inputBox);
    this.inputBox.appendChild(this.input);
    this.inputBox.appendChild(this.inputBorder);
    this.taskBox.appendChild(this.button);
  }

  readValue() {
    return this.input.value;
  }
}

class List {
  constructor(parent) {
    this.parent = parent;
  }

  render() {
    const list = document.createElement("ul");
    list.setAttribute("class", "task-list");
    const title = document.createElement("h2");
    title.setAttribute("class", "task-list__title");
    title.innerText = "Task list";
    list.setAttribute("class", "task-list__list");

    this.parent.appendChild(list);

    return list;
  }
}

class Task {
  constructor(text) {
    this.text = text;
  }

  render() {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.setAttribute("class", "task-list__item");
    li.innerText = this.text;
    button.setAttribute("class", "task-list__item--delete");
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';
    li.appendChild(button);
    return li;
  }
}
const app = new App(".container");
