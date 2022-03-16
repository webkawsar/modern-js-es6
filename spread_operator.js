
const numbers1 = [1, 3, 5, 7, 9];
const numbers2 = [11, 13, 15, 17, 19];

const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);



// const a = numbers1;
const a = [...numbers1, 15];
// console.log(a);

numbers1.push(10);
// console.log(a);     // [ 1, 3, 5, 7, 9, 15 ]
// console.log(numbers1);  // [ 1, 3, 5, 7, 9, 10 ]


const myObj = {
    name: "JavaScript",
    est: 1995,
    founder: "Brendan Eich",
    libraries: ["React", "Vue"]
}

const newObj = {...myObj};
// console.log(newObj);

myObj.libraries.push("Angular");
// console.log(myObj);
console.log(newObj);    //not work 
