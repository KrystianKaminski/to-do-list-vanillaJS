class List {
    constructor(container) {
        this.container = container || document.querySelector('body')
        this.tasks = []
        this.list = document.querySelector('.task-list__list')
        this.addButton = document.querySelector('.add-task-box__button')
        this.inputValue = document.querySelector('.add-task-box__input')

        this.init()
    }

    init() {
        this.render()
        this.buttonListener()
    }

    addTask() {
        this.tasks.push(new Task(this.inputValue.value))
    }

    buttonListener() {
        this.addButton.addEventListener('click', () => {
            this.addTask()
            this.render()
            this.inputValue.value = ''
            console.log(this.tasks)
        })
    }
    makeDeleteButton() {
        return `<div class="task-list__item--delete">
        <i class="fas fa-trash-alt"></i>
    </div>`
    }

    render() {
        this.list.innerHTML = ''
        this.tasks.forEach(task => {
            const li = document.createElement('li')
            li.setAttribute('class', 'task-list__item')
            li.innerHTML = task.text + this.makeDeleteButton()
            this.list.appendChild(li)
        })
    }

}

class Task {
    constructor(text) {
        this.text = text
    }
}

const list = new List(document.querySelector('.task-list'))