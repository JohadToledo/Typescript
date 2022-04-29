const operations = ['multiply', 'add', 'divide'  ]

const calculator = (a: number, b: number, op: 'multiply'| 'add'| 'divide'): number => {
    if(op === 'multiply') return a * b
    if(op === 'add') return a + b
    if(op === 'divide'){
        if(b === 0) throw new Error('can\t divide by 0!')
        return a / b
    } 
}
console.log(calculator(1, 2, 'add'))
console.log(calculator(1, 4, 'divide'))