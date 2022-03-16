

const myFunc = (param = 10) => param;

// console.log(myFunc(10));    //got 20
// console.log(myFunc(undefined));    // if we send undfined return got default 10
console.log(myFunc(null));    // if we send null return got null
