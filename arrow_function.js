//this problem

// var javascript = {
//     name: "JavaScript",
//     libraries: ['React', 'Angular', "Vue"],
//     printLibraries: function() {
//         var self = this;

//         this.libraries.forEach(function(a) {
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
// }

// javascript.printLibraries();


//solved by arrow function

// var javascript = {
//     name: "JavaScript",
//     libraries: ['React', 'Angular', "Vue"],
//     printLibraries: function() {
        
//         this.libraries.forEach((a) => {
//             console.log(`${this.name} loves ${a}`);
//         })
//     }
// }

// javascript.printLibraries();




// const JavaScript ={
//     name: 'js',
//     library:['react', 'vue', 'angular'],
//     print: function () {
//         console.log(this);

//         const name = () => { // here normal function can't work with this
//             console.log(this);
//         }
//         name();
//     }
// }
// JavaScript.print();





// const JavaScript ={
//     name: 'js',
//     library:['react', 'vue', 'angular'],
//     print:  function() {
//         console.log(this);

//         const name = () => { // here normal function can't work with this
//             console.log(this);

//             const test = () => { /// here normal function can't work with this

//                 console.log(this);
//             }
//             test();
//         }
//         name();
//     }
// }
// JavaScript.print();


//here this will not work
// document.getElementById("button").addEventListener("click", () => {

//     console.log(this);
// })

//Here this will work
// document.getElementById("button").addEventListener("click", function() {

//     console.log(this);
// })


// document.getElementById("input").addEventListener("keyup", function() {

//     const demo = document.getElementById("demo");
//     demo.innerHTML = this.value;

//     setTimeout(function() {
        
//         document.getElementById("thanks").innerHTML = `Thanks for type: ${this.value}`;
//     }, 2000);
// })




// function Person(name, age) {

//     this.name = name;
//     this.age = age;
// }
// const rahim = new Person("Rahim", 25);
// console.log(rahim.age);


// const Person = (name, age) => {

//     this.name = name;
//     this.age = age;
// }
// const rahim = new Person("Rahim", 25);
// console.log(rahim.age);