enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

const pepe = ContractStatus.Apprentice

console.log(pepe)

interface Employee{
    employeeID: number
    age: number
}

const person: Employee ={
    employeeID: 1234,
    age: 2
}