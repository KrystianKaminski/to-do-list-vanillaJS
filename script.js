class App {
  constructor(container) {
    this.container = document.querySelector(container) || document.body
    this.tasks = []
    this.inputBox = new InputBox(this.container)

    this.init()
  }

  init() {
    this.render()
  }

  render() {
    this.inputBox.render()
  }
}

class InputBox {
  constructor(parent) {
    this.parent = parent
  }

  render() {
    const inputBoxDiv = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    button.innerText = 'Add task'

    inputBoxDiv.setAttribute('class', 'add-task-box')

    inputBoxDiv.appendChild(input)
    inputBoxDiv.appendChild(button)
    this.parent.appendChild(inputBoxDiv)
  }
}

class List {
  constructor() {

  }
}

class Task {
  constructor() {

  }
}

const app = new App('.container')