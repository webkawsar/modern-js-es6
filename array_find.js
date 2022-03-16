/***********************************************************************************************************                                                          Note
 ********************************************************************************************************/
// find method condition true hoye gele break kore loop theke ber hoye ase tai sudu prothom value pawa jay
// tar mane exact value return kore ar na pele undefined return kore
// and main array change kore na
// find first parameter function ney ar second parameter this ney


// const numbers = [1, 3, 5, 7, 9, 11];
// const result = numbers.find((value, index, array) => {

//     console.log(value, "value");
//     console.log(index, "index");
//     console.log(array, "array");
//     console.log('-----------------------');

//     return value > 50;
// })
// console.log(result);



// class Student {

//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     test() {
//         console.log("hello");
//     }

//     exampleFunction() {

//         let array = [1, 2, 3];
//         array.find(function() {

//             this.test();
//         }, this);

//     }
    
// }

// let student = new Student("sumit", 35);
// student.exampleFunction();



//arrow function dile this dewa lagbe na
class Student {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    test() {
        console.log("hello");
    }

    exampleFunction() {

        let array = [1, 2, 3];
        array.find(() => { //if we use arrow function then can't bind this

            this.test();
        });

    }
    
}

let student = new Student("sumit", 35);
student.exampleFunction();




