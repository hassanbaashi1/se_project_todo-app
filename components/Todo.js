class Todo {
  constructor(data, selector) {
    this.data = data;
    this._templateElement = document.querySelector(selector);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this.data.name;
    todoCheckboxEl.checked = this.data.completed;

    todoCheckboxEl.id = `todo-${this.data.id}`;
    todoLabel.setAttribute("for", `todo-${this.data.id}`);

    return this._todoElement;
  }
}

export default Todo;
