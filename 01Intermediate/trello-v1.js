const myTodos = [];

myTodos.unshift('Buy Bread');
myTodos.unshift('Record videos for youtube');
myTodos.unshift('Go to gym');

// myTodos.forEach(function(todos, i){
//     console.log(`Your task no. ${i+1} is: ${todos}`);
// })

for(let i = 0; i < myTodos.length; i++){
    console.log(`Your task no. ${i+1} is: ${myTodos[i]}`);
}