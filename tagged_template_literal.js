// tagged template literal

function modify(strings, ...values) {

    // console.log(strings);
    // console.log(values);
    const sum = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "")
    }, "")

    return sum;
}

const player1 = "Sakib";
const player2 = "Tamim";

const result = modify`Bangladesh has a Selfish player ${player1} and Good player ${player2}`;

console.log(result);
