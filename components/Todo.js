class Todo {
  constructor(data, selector, todoCounter) {
    if (!data) {
      throw new Error("Todo data is required");
    }
    this._templateElement = document.querySelector(selector);
    if (!this._templateElement) {
      throw new Error(`Template with selector "${selector}" not found`);
    }
    if (!todoCounter) {
      throw new Error("TodoCounter instance is required");
    }
    this._data = data;
    this._todoCounter = todoCounter;
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      if (this._data.completed) {
        this._todoCounter.updateCompleted(false);
      }
      this._todoCounter.updateTotal(false);
      this._todoElement.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._todoElement.classList.toggle("todo_completed");
      this._todoCounter.updateCompleted(this._data.completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDateEl() {
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._dueDate = new Date(this._data.date);
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._generateDateEl();

    return this._todoElement;
  }
}

export default Todo;
