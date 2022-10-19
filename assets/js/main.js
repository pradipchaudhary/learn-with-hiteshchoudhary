console.log("Welcome to Todo List ");
// Grab all element

const form = document.querySelector("[data-form]");
const lists = document.querySelector("[data-lists]");
const input = document.querySelector("#input");

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

  console.log(todoArr);
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
          <p>Todo item</p>
          <span>X</span>
        </div>
        `;
    });
    lists.innerHTML = displayData.join(" ");
  }
  // Clear Input
  static clearInput() {
    input = "";
  }
}

// console.log(input);
