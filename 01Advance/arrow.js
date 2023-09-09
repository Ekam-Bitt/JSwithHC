// Normal function
// const sayHello = function(name){
//     return 'Hey there ' + name + ' !!!';
// }
//console.log(sayHello('Ekam'));

// 01 Basic Arrow function
// const sayHello = (name) => {
//     return 'Hey there ' + name + ' !!!';
// }
// console.log(sayHello('Ekam'));

// 02 Basic Arrow function
// const sayHello = (name) => 'Hey there ' + name + ' !!!';
// console.log(sayHello('Ekam'));

const myTodos = [
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: "Buy bread",
    isDone: false,
  },
  {
    title: "Record Youtube Videos",
    isDone: true,
  },
];

// 01 Advance Arrow Function

const todos = myTodos.filter((todo) => todo.isDone === true);

console.log(todos);