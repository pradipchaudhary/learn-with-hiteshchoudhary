// console.log("Welcome to Todo List ");

// Grab all element
const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists]");
let input = document.querySelector("#input");

// Empty Array
let todoArr = [];
// Form Part
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.floor(Math.random() * 1000);
  let todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];
  UI.displayData();
  UI.clearInput();
  UI.removeTodo();
});

// Create Object
class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

// Display the todo in the DOM :
class UI {
  // Display Data
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `
        <div class="todo_item">
          <p>${item.todo}</p>
          <span class="remove">X</span>
        </div>
        `;
    });
    lists.innerHTML = displayData.join(" ");
  }

  // Clear Input
  static clearInput() {
    input.value = "";
  }

  // Remove List
  static removeTodo() {
    lists.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        console.log("Remove");
        console.log(e.target.parentElement.remove());
      }
    });
  }
}

// console.log(input);
