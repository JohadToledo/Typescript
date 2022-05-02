const multiplicator = (a: number, b: number, printText:string) =>{
    console.log(printText, a * b)
}
const parseArguments = (argv) =>{
    if (argv.length !== 4) throw new Error ('Wrong number of arguments')

    const firstNumber = Number(argv[2])
    const secondNumber = Number(argv[3])

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        return[
            firstNumber,
            secondNumber
        ]
    }

    throw new Error ('Provided values were not numbers')
}

const cleanArguments = parseArguments(process.argv)
console.log(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and the results is: `)