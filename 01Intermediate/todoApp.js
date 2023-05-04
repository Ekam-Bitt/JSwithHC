const todos=[]

todos.unshift('Buy Bread')
todos.unshift('Record videos')
todos.unshift('Go to gym')

for (let i=0; i<todos.length; i++){
    console.log(`Your To-Do No. ${i+1} is: ${todos[i]} `)
}