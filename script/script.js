let user = {
  name: "John",
  image:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
};

let todos = [
  {
    text: "Modifica il nome profilo cliccando due volte su di esso",
    completed: false,
  },
  {
    text: "clicca sul testo per segnare la todo come svolta",
    completed: true,
  },
  {
    text: "Clicca sul bottone in basso a destra per aggiungere una nuovo todo",
    completed: false,
  },
  {
    text: "Scrivi la tua nuova todo",
    completed: false,
  },
  {
    text: "Cancella la todo premendo la x a destra",
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
    inputNameActive: false,
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
      this.btnActive = false;
      this.inputActive = false;
    },
    addNewTodo: function () {
      this.todos.push({
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    setInputActive: function () {
      this.inputActive = true;
      this.btnActive = true;
    },
    updateUserName: function () {
      let username = document.querySelector("#userNameInput").value;
      this.user.name = username;
      this.inputNameActive = false;
    },
    editUserName: function () {
      this.inputNameActive = true;
    },
  },
});

let bgApp = new Vue({
  el: "#bg-app",
  data: {
    xPosition: 0,
    yPosition: 0,
  },
  methods: {
    checkMousePosition: function () {
      let moveElement = document.querySelector("#move-element1");
      let moveElement1 = document.querySelector("#move-element2");
      let moveElement2 = document.querySelector("#move-element3");
      this.xPosition = -(window.event.clientX / window.innerWidth) * 10;
      this.yPosition = -(window.event.clientY / window.innerHeight) * 10;
      moveElement.style.left = Math.floor(this.xPosition / 3 - 5) + "%";
      moveElement.style.top = Math.floor(this.yPosition / 2 - 10) + "%";
      moveElement1.style.left = Math.floor(this.xPosition + 30) + "%";
      moveElement1.style.top = Math.floor(this.yPosition + 6) + "%";
      moveElement2.style.left = Math.floor(this.xPosition * 3 + 20) + "%";
      moveElement2.style.top = Math.floor(this.yPosition * 4 + 62) + "%";
    },
  },
});
