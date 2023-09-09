let john = {
    name: "John Doe",
    age: 25,
    isOnline: true,
}
let jane = {
    name: "Jane Doe",
    age: 23,
    isOnline: true,
}
let lewis = {
    name: "Lewis Franklin",
    age: 29,
    isOnline: false,
}

let users = new Map();

users.set('john', john);
users.set('jane', jane);
users.set('lewis', lewis);

// console.log(users)
// console.log(users.get('jane'));
// console.log(users.forEach((element) => console.log(element)));

// USING FOR OF LOOP

// for (const user of users.keys()) {
//     console.log(user);
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + '=' + value.name);
//     console.log(`Full name of ${key} is ${value.name}`);
// }

// USING FOR EACH LOOP

// users.forEach((value, key) => console.log(`Full name of ${key} is ${value.name}`));

let arrOfArr = [['one','1','a'],['two','2','b'],['three','3','c']];
// console.table(arrOfArr);
let aA = new Map(arrOfArr);
console.log(aA)