var operations = ['multiply', 'add', 'divide'];
var calculator = function (a, b, op) {
    if (op === 'multiply')
        return a * b;
    if (op === 'add')
        return a + b;
    if (op === 'divide') {
        if (b === 0)
            return 'can\t divide by 0! ';
        return a / b;
    }
};
console.log(calculator(1, 2, 'add'));
console.log(calculator(1, 4, 'divide'));
