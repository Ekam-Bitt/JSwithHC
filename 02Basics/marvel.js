const superhero = ['SpiderMan', 'IronMan', 'CaptainAmerica', 'Thor', 'Hulk', 'BlackWidow', 'Hawkeye', 'DoctorStrange', 'BlackPanther', 'CaptainMarvel']

console.log(superhero)
console.log(superhero[0])
console.log("Array Length: "+superhero.length)
console.log("We have "+superhero.length+" superheroes")
console.log(`We have ${superhero.length} superheroes`)


//start -> shift(), unshift()

console.log(superhero.shift())
console.log(superhero)
console.log(superhero[0])

superhero.unshift('Batman')
console.log(superhero)
superhero[0]='Spiderman'
console.log(superhero)

//end -> pop(), push()

console.log(superhero.pop())
console.log(superhero)

superhero.push('NickFury')
console.log(superhero)

//middle -> splice()

console.log(superhero.splice(5,1,'Wanda'))
console.log(superhero)

console.log(superhero.splice(5,1,'BlackWidow','Wanda','Vision'))
console.log(superhero)
