
// Object destructuring
const user = {
    name: "Kawsar Ahmed",
    age: 25,
    education: "BBA"
}

const {name, age, education } = user;
// console.log(age);




// Array Destructring
const numbers = [111, 113, 115, 117, 119];

// const [a, b] = numbers;
const [a, ...b] = numbers;
// console.log(a, b);




// Nested Object Destructuring
const person = {
    firstName: "Azizul",
    lastName: "Hoque",
    profession: "Textile Engineer",
    education: "Pabna Textile College",
    skills: {
        pro: "JS",
        design: "HTML, CSS"
    }
}

const { firstName, lastName, skills: { pro } } = person;
console.log(`My name is ${firstName} ${lastName}.My programming skill is ${pro}`);








const users = [
    {
        firstName: "Kawsar",
        lastName: "Ahmed",
        age: 25,
        education: "BBA",
        profession: "Developer",
    },
    {
        firstName: "Shamim",
        lastName: "Ahmed",
        age: 25,
        education: "BBA",
        profession: "Pilot",
    },
    {
        firstName: "Imran",
        lastName: "Ahmed",
        age: 25,
        education: "BBA",
        profession: "Premik",
    }
]

// const [ {obj: {firstName}} ] = users;
// console.log(firstName);













