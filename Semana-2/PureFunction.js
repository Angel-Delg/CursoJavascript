let contextGlobal = 2

const pureFunction = (n1, n2) => {
    return  n1 + n2
} 

console.log("Funcion pura")
console.log(pureFunction(10, 23))
console.log(pureFunction(10, 23))
console.log(pureFunction(10, 23))

const inPureFunction = (n1, n2) => {
    contextGlobal += n1 + n2
    return contextGlobal
}

console.log("Funcion inpura")

console.log(inPureFunction(10, 23))
console.log(inPureFunction(10, 23))
console.log(inPureFunction(10, 23))
