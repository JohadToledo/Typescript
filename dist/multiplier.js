"use strict";
const multiplicator = (a, b, printText) => {
    console.log(printText, a * b);
};
const parseArguments = (argv) => {
    if (argv.length !== 4)
        throw new Error('Wrong number of arguments');
    const firstNumber = Number(argv[2]);
    const secondNumber = Number(argv[3]);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ];
    }
    throw new Error('Provided values were not numbers');
};
const cleanArguments = parseArguments(process.argv);
console.log(process.argv);
const a = Number(cleanArguments[0]);
const b = Number(cleanArguments[1]);
multiplicator(a, b, `Multiplied ${a} and ${b} and the results is: `);
