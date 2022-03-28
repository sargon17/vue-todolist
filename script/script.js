let user = {
  name: "John",
  image:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

let todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

// new vue instance
let todoApp = new Vue({
  el: "#todo-app",
  data: {
    todos: todos,
    user: user,
    newTodo: "",
    btnActive: false,
    inputActive: false,
  },
  methods: {
    checkDoneTodo: function (todo) {
      todo.completed = !todo.completed;
    },
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    readInputValue: function () {
      let value = document.querySelector("#inputNewTodo").value;
      if (value.length > 0) {
        this.newTodo = value;
        this.addNewTodo();
      }
    },
    addNewTodo: function () {
      this.todos.push({
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      this.btnActive = false;
      this.inputActive = false;
    },
    setInputActive: function () {
      this.inputActive = true;
      this.btnActive = true;
    },
  },
});
