"use strict";
const calculator = (a, b, op) => {
    if (op === 'multiply')
        return a * b;
    if (op === 'add')
        return a + b;
    if (op === 'divide') {
        if (b === 0)
            throw new Error('can\t divide by 0!');
        return a / b;
    }
    throw new Error('Operation is not valid');
};
console.log(process.argv);
// try{
//     console.log(console.log(calculator(1, 0, 'divide'))
//     )
// }catch(e){
//     console.log('something went wrong', e)
// }
