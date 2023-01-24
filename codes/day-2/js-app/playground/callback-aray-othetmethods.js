function sortValues(arr, logicFn) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const compareValue = logicFn(arr[i], arr[j])
            if (compareValue < 0) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
const numbers = [1, 0, 4, 2, 6, 7, 5, 8, 9, 3]
const isGreater = function (x, y) {
    return x - y
}
//sortValues(numbers, isGreater)
numbers.sort(isGreater)
function doSomething(arr, logicFn) {
    for (const val of arr) {
        logicFn(val)
    }
}
const printValues = function (num) {
    console.log(num)
}
//doSomething(numbers, printValues)
numbers.forEach(printValues)

const found = numbers.find(
    function (num) {
        return num === 4
    }
)
const index = numbers.findIndex(
    function (num) {
        return num === 4
    }
)

const arr = numbers.map(
    function (num) {
        return "Num: " + num
    }
)

