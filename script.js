(function () {

  class App {
    constructor(container) {
      this.container = document.querySelector(container) || document.body
      this.tasks = JSON.parse(window.localStorage.getItem('ToDo')) || []

      this.init()
    }

    init() {
      this.render()
    }

    makeUI() {
      const inputBox = document.createElement('div')

      const input = document.createElement('input')
      const inputSearch = document.createElement('input')

      const button = document.createElement('button')
      const searchButton = document.createElement('button')
      const allTasksButton = document.createElement('button')
      const finishedButton = document.createElement('button')

      inputBox.setAttribute('class', 'add-task-box')
      input.setAttribute('class', 'add-task-box__input')
      inputSearch.setAttribute('class', 'add-task-box__input')
      button.setAttribute('class', 'add-task-box__button')
      searchButton.setAttribute('class', 'add-task-box__button')

      button.addEventListener('click', () => {
        this.addTask(input.value)
        input.value = ''
        this.render()
      })

      searchButton.addEventListener('click', () => {
        this.searchTasks(inputSearch.value)
      })

      allTasksButton.addEventListener('click', () => {
        this.showAllTasks()
      })

      finishedButton.addEventListener('click', () => {
        this.showFinishedTasks()
      })

      button.innerText = 'Add task'
      searchButton.innerText = 'Search tasks'
      allTasksButton.innerText = 'Show all tasks'
      finishedButton.innerText = 'Show finished tasks'


      inputBox.appendChild(input)
      inputBox.appendChild(button)

      inputBox.appendChild(inputSearch)
      inputBox.appendChild(searchButton)

      inputBox.appendChild(allTasksButton)
      inputBox.appendChild(finishedButton)

      this.container.appendChild(inputBox)
    }

    showFinishedTasks() {
      const finished = this.tasks.filter(task => task.isCompleted)
      this.render(finished)
    }

    showAllTasks() {
      this.render()
    }

    saveInLocalStorage() {
      window.localStorage.setItem('ToDo', JSON.stringify(this.tasks))
    }

    searchTasks(value) {
      this.tasks = this.tasks.filter(task =>
        task.text
        .replace(/\s/g, '')
        .toLowerCase()
        .includes(
          value
          .replace(/\s/g, '')
          .toLowerCase()
        )
      )
      this.render()
      this.saveInLocalStorage()
    }

    addTask(text) {
      this.tasks.push(new Task(text))
      this.saveInLocalStorage()
    }

    deleteTask(index) {
      this.tasks = this.tasks
        .slice(0, index)
        .concat(this.tasks.slice(index + 1))

      this.render()
      this.saveInLocalStorage()
    }

    toggleIsCompleted(task) {
      task.isCompleted = !task.isCompleted
      this.render()
      this.saveInLocalStorage()
    }

    render(arr) {
      this.container.innerHTML = ''
      this.makeUI()

      const list = document.createElement('ul')
      const arrayToRender = arr || this.tasks

      list.setAttribute('class', 'task-list__list')

      arrayToRender.forEach((task, index) => {
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
})()