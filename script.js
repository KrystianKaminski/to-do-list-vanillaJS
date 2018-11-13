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
        this.addButtonListener()
    }

    addTask() {
        this.tasks.push(new Task(this.inputValue.value, this.tasks.length))
    }

    deleteTask(i) {
        this.tasks.splice(i, 1)
    }


    addButtonListener() {
        this.addButton.addEventListener('click', () => {
            this.addTask()
            this.render()
            this.inputValue.value = ''
            console.log(this.tasks)
            this.deleteTaskListener()
        })
    }

    deleteTaskListener() {
        const deleteBtn = [...document.querySelectorAll('.task-list__item--delete')]
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.list.removeChild(e.target.parentNode.parentNode)
                console.log(this.tasks.index)
            })
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
    constructor(text, index) {
        this.text = text
        this.index = index
    }

}

const list = new List(document.querySelector('.task-list'))