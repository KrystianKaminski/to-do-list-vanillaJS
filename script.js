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

  render() {
    this.container.innerHTML = ''
    this.makeUI()

    const list = document.createElement('ul')

    list.setAttribute('class', 'task-list__list')

    this.tasks.forEach(task => {
      const element = document.createElement('li')

      element.setAttribute('class', 'task-list__item')

      element.innerText = task.text
      list.appendChild(element)
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