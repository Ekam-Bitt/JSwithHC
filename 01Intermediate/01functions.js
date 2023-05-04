let sayHello = function(name){
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name} \n`)
}

sayHello("John")

let fullNameMaker = function(firstName, lastName){
    console.log(`Welcome to LCO`)
    console.log(`Happy to have you, ${firstName} ${lastName}\n`)
}

fullNameMaker("John", "Smith")

let multiply = function(n1, n2){
    return n1 * n2;
}

let a=4, b=5
console.log(`The product of ${a} and ${b} is: ` + multiply(a,b))
console.log('\n')


//default parameters

let user = function(name='unRegistered',password='notSet'){
    console.log(`Welcome: ${name}`)
    console.log(`Password: ${password}\n`)
}
user()
user('Ekam','1234abcd')