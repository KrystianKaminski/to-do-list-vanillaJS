class App {
  constructor(container) {
    this.container = document.querySelector(container) || document.body
    this.tasks = []

    this.init()
  }

  init() {
    this.render()
  }

  makeUI() {
    const inputBox = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    inputBox.setAttribute('class', 'add-task-box')
    input.setAttribute('class', 'add-task-box__input')
    button.setAttribute('class', 'add-task-box__button')

    button.addEventListener('click', () => {
      this.addTask(input.value)
      input.value = ''
      this.render()
    })

    button.innerText = 'Add task'


    inputBox.appendChild(input)
    inputBox.appendChild(button)

    this.container.appendChild(inputBox)
  }

  addTask(text) {
    this.tasks.push(new Task(text))
  }

  deleteTask(index) {
    this.tasks = this.tasks
      .slice(0, index)
      .concat(this.tasks.slice(index + 1))

    this.render()
  }

  toggleIsCompleted(task) {
    task.isCompleted = !task.isCompleted
    this.render()
  }

  render() {
    this.container.innerHTML = ''
    this.makeUI()

    const list = document.createElement('ul')

    list.setAttribute('class', 'task-list__list')

    this.tasks.forEach((task, index) => {
      const element = document.createElement('li')
      const deleteBtn = document.createElement('button')

      element.addEventListener('click', () => {
        if (task.isCompleted === true) {
          element.style.textDecoration = 'line-through'
        } else {
          element.style.textDecoration = 'none'
        }
        this.toggleIsCompleted(task)
      })

      if (task.isCompleted) {
        element.style.textDecoration = 'line-through'
        element.style.color = '#718093'
      } else {
        element.style.textDecoration = 'none'
        element.style.color = '#dcdde1'
      }


      deleteBtn.addEventListener('click', () => this.deleteTask(index))

      element.setAttribute('class', 'task-list__item')
      deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
      deleteBtn.setAttribute('class', 'task-list__item--delete')

      element.innerText = task.text

      list.appendChild(element)
      element.appendChild(deleteBtn)
    })

    this.container.appendChild(list)
  }
}

class Task {
  constructor(text) {
    this.text = text
    this.isCompleted = false
  }
}



const app = new App('.container')