function filterValues(arr, logicFn) {
    //return fresh array containing even numbers only
    const result = []
    for (const val of arr) {
        const status = logicFn(val)
        if (status)
            result.push(val)
    }
    return result
}
const numbers = [1, 3, 2, 5, 7, 0, 8, 6, 9, 4]
const isEven = function (num) {
    return num % 2 === 0 ? true : false
}
debugger
//const evenNumbers = filterValues(numbers, isEven)
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

const isOdd = function (num) {
    return num % 2 !== 0
}
//const oddNumbers = filterValues(numbers, isOdd)
const oddNumbers = numbers.filter(isOdd)
console.log(oddNumbers)

const people = ['anil', 'SUNIL', 'mahesh']
const filterName = function (name) {
    return name.toLocaleLowerCase().indexOf('n') !== -1
}
//const filteredPeople = filterValues(people, filterName)
const filteredPeople = people.filter(filterName)
console.log(filteredPeople)

const add = function (a, b) {
    return a + b
}
const subtract = function (a, b) {
    return a - b
}
function invokeOperation(fnRef, x, y) {
    console.log(fnRef(x, y))
}
invokeOperation(add, 12, 3)


const getMarker = function (howMany) {
    return 'got ' + howMany + ' markers'
}
const getAttendanceSheet = function (howMany) {
    return 'got ' + howMany + ' sheets'
}

const assistTrainer = function (howToAssist, additionalArgs) {
    return howToAssist(additionalArgs)
}

console.log(assistTrainer(getMarker, 2))