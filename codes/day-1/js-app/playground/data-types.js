//number, string, boolean, object, function
//NULL, undefined, NaN, Infinity
var x = 100
var a = 12.34
var y = 'Deloitte'
var z = 'a'
var test = true
var anilObj = {
    //value properties
    name: 'Anil',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(typeof x)
console.log(typeof a)
console.log(typeof y)
console.log(typeof z)
console.log(typeof test)
console.log(typeof anilObj)


var fn = function () {
    console.log('function')
}
console.log(typeof fn)