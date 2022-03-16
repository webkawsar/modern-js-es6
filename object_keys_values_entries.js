const myObj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: 1995
}

const keys = Object.keys(myObj);
const values = Object.values(myObj);
const entries = Object.entries(myObj);

// console.log(entries);


//object shorthand
const obj = { keys, values, entries };
console.log(obj);



