//const myTodos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
//console.log(myTodos[myTodos.indexOf('c')]);

const newTodos = [
  {
    title: "Buy Bread",
    isDone: false,
  },
  {
    title: "Record videos for youtube",
    isDone: false,
  },
  {
    title: "Go to gym",
    isDone: true,
  },
];

// const index = newTodos.findIndex(function (todo) {
//     console.log(todo);
//     return todo.title === "Go to gym";
// });
// console.log(index);

// My Approach : using findIndex()
const findTodo = function (myTodos, title) {
  const index = myTodos.findIndex(function (todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase();
  });
  return myTodos[index];
}
//let reqTodo = findTodo (newTodos, 'buy bread');
//console.log(`The todo you are looking for is: ${reqTodo.title}, and it is ${reqTodo.isDone?'Done':'Not Done'}!`);

// Approach 2 : using find()
const findTodo2 = function(myTodos, title){
  const titleReturned = myTodos.find(function(todo, index){
    return todo.title.toLowerCase() === title.toLowerCase();
  });
  return titleReturned;
}
let reqTodo2 = findTodo2 (newTodos, 'buy bread');
console.log(`The todo you are looking for is: ${reqTodo2.title}, and it is ${reqTodo2.isDone?'Done':'Not Done'}!`);
