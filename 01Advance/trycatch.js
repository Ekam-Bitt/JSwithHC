const getRS = (dollar) => {
    if(typeof(dollar) === 'number'){
        return dollar*80;
    } else {
        throw Error('Type Error - Amount needs to be in numbers')
    }
};

// Without try-catch
// console.log(getRS('five'))

// console.log('Lets see if this line prints despite error on line 10');

// No it didn't print

// Lets try again, with try-catch this time ;D

try {
    console.log(getRS('five'))
} catch (error) {
    console.log(error);
}

console.log('Lets see if this line prints despite error on line 19');

// Line 24 printed despite error in line 19
// Thats Try Catch for you :D