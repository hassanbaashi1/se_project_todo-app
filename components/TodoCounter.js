class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    if (!this._element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }
    if (!Array.isArray(todos)) {
      throw new Error("todos parameter must be an array");
    }
    this._completed = 0;
    this._total = todos.length;
    this._completed = todos.filter((todo) => todo.completed).length;
    this._updateText();
  }
  // todd
  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
