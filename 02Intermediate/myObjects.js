let linkedinProfile1 = {
    userName: 'Ekam Bitt',
    userAge: 19,
    email: 'ekambitt@gmail.com',
    collegeName: 'Heritage Institute of Technology',
    linkedinUrl: 'https://www.linkedin.com/in/ekam-bitt-584645203/',
    githubUrl: 'https://github.com/Ekam-Bitt',
    twitterUrl: 'https://twitter.com/BittEkam'
}

let linkedinProfile2 = {
    userName: 'Sristi Majumdar',
    userAge: 19,
    email: 'sristimajumdar@gmail.com',
    collegeName: 'Heritage Institute of Technology',
    linkedinUrl: 'https://www.linkedin.com/in/sristi-majumdar-584645203/',
    githubUrl: 'https://github.com/Sristi-Majumdar',
    twitterUrl: 'https://twitter.com/SristiMajumdar'
}

//console.log(linkedinProfile);

//console.log(`Welcome User: ${linkedinProfile.userName} \nLinkedin Url: ${linkedinProfile.linkedinUrl}`);

//Writing a function which takes an object and returns another object with some changes

let changeUrls = function(anyObject){
    // anyObject.linkedinUrl = 'https://www.linkedin.com/in/ekam-bitt/';
    return {
        Age1: `Original User Age is: ${anyObject.userAge}`,
        Age2: `Updated User Age is: ${anyObject.userAge + 1}`,
    };
}

let adTwo = changeUrls(linkedinProfile2);
console.log(adTwo.Age2);