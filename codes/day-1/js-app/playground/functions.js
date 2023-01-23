//function declaration
var resAdd = add(12, 13)
console.log(resAdd)
function add(a, b) {
    var res = a + b
    return res
}

//function expression
// var resSub = subtract(12, 3)
// console.log(resSub)
var subtract = function (a, b) {
    return a - b
}
var resSub = subtract(12, 3)
console.log(resSub)

// var calcObj = {
//     subtract: function (a, b) {
//         return a - b
//     }
// }


