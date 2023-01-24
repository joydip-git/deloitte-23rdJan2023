const a = 100
let arr = [10, 20, 30, 40]
// let old = arr
//arr = [10, 20]
arr.splice(2, 0, 100) //[10,20,100,30,40]
console.log(arr)
const copy = arr.slice(0, 2)
console.log(copy)
const copyArr = [...arr, 10, 20]
// delete old[3]
// console.log(old)
//const arr = new Array(1, 2, 3, 4)
/**
 * {
 *  0:1,
 *  1:2,
 *  2:3,
 *  3:4
 * }
 */

const obj = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return this.name + ' ' + this.salary
    }
}
// obj.location = 'Bangalore'
// obj.sayHi = function () {
//     console.log('Hi...')
// }
obj['location'] = 'Bangalore'
obj['sayHi'] = function () {
    console.log('Hi...')
}
console.log(obj)
// const copyObj = {}
// for (const propName in obj) {
//     const propValue = obj[propName]
//     copyObj[propName] = propValue
// }
//spread operator => ...
const copyObj = { ...obj }
console.log(copyObj)
// console.log(obj.id)
// console.log(obj['name'])
// console.log(obj['print'])
// console.log(obj.print())

// const name = obj.name
// const id = obj.id

//const { name: name, id: id } = obj
const { name, id } = obj

console.log(name, id)

// const first = arr[0]
// const third = arr[2]
// const fifth = arr[4]

const [first, , third, , fifth] = arr

const sample = {
    name: 'anil',
    company: {
        name: 'Deloitte',
        projects: [{
            projName: 'p1',
            startDate: new Date(1, 1, 2020),
            endDate: new Date(31, 12, 2024),
            manager: {
                name: 'sunil'
            }
        }, {
            projName: 'p2',
            startDate: new Date(1, 1, 2020),
            endDate: new Date(31, 12, 2024),
            manager: {
                name: 'komal',
                salary: 100
            }
        }]
    }
}

//sample.company.projects[1].manager.name
//const [] = sample
const { company: { projects: [{ manager: { name: firstMngName } }, { manager: { name: secondMngName } }] } } = sample

console.log(firstMngName, secondMngName)



