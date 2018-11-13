class List {
    constructor(container) {
        this.container = container || document.querySelector("body");
        this.tasks = [];
        this.list = document.querySelector(".task-list__list");
        this.addButton = document.querySelector(".add-task-box__button");
        this.inputValue = document.querySelector(".add-task-box__input");

        this.init();
    }

    init() {
        this.render();
        this.addButtonListener();
    }

    addTask() {
        this.tasks.push(new Task(this.inputValue.value, this.tasks.length));
        console.log(this.tasks)
    }

    deleteTask(i) {
        this.tasks = this.tasks.slice(0, i).concat(this.tasks.slice(i + 1));
    }

    addButtonListener() {
        this.addButton.addEventListener("click", () => {
            this.addTask();
            this.render();
            this.inputValue.value = "";
        });
    }

    render() {
        this.list.innerHTML = "";
        this.tasks.forEach(task => {
            task.render()
        });
    }
}

class Task {
    constructor(text, index) {
        this.text = text;
        this.index = index;
        this.parent = document.querySelector(".task-list__list")
        this.deleteBtn = `<div class="task-list__item--delete">
        <i class="fas fa-trash-alt"></i>
    </div>`
    }

    render() {
        const li = document.createElement("li");
        li.setAttribute("class", "task-list__item");
        li.innerHTML = this.text + this.deleteBtn;
        this.parent.appendChild(li)
        return li
    }
}

const list = new List(document.querySelector(".task-list"));