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

    button.innerText = 'Add task'


    inputBox.appendChild(input)
    inputBox.appendChild(button)

    this.container.appendChild(inputBox)
  }

  render() {
    this.makeUI()
  }
}

class Task {
  constructor(text) {
    this.text = text
    this.isCompleted = false
  }
}



const app = new App('.container')