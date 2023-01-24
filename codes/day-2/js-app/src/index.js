class Product {
    #id
    #name
    #price
    #rating
    #imageUrl
    constructor(pid, pname, pprice, prating, pimage) {
        this.#id = pid
        this.#name = pname
        this.#price = pprice
        this.#imageUrl = pimage
        this.#rating = prating
    }
    static sayHi() {
        console.log('Hi...')
    }
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    set name(val) {
        this.#name = val
    }
    get price() {
        return this.#price
    }
    set price(val) {
        this.#price = val
    }
    get imageUrl() {
        return this.#imageUrl
    }
    set imageUrl(val) {
        this.#imageUrl = val
    }
    get rating() {
        return this.#rating
    }
    set rating(val) {
        this.#rating = val
    }
    print() {
        return `${this.name}, ${this.price}, ${this.rating}`
    }
}
const dellXpsObj = new Product(2, 'Dell XPS', 120000, 4, '')
// dellXpsObj.name = 'Dell XPS'
// console.log(dellXpsObj.name)
const iPhone13Obj = new Product(1, 'iPhone13', 140000, 4.6, '')
const hpProbookObj = new Product(3, 'HP Probook', 100000, 4.5, '')
const products = []
//const products = [dellXpsObj, iPhone13Obj, hpProbookObj]
products.push(dellXpsObj, iPhone13Obj, hpProbookObj)

/*
let choice = Number(window.prompt('enter choice[1/2/3]: ', '0'))

switch (choice) {
    case 1:
        products
            .sort(
                function (p1, p2) {
                    return p1.id - p2.id
                }
            )
        break;

    case 2:
        products
            .sort(
                function (p1, p2) {
                    return p1.name.toLocaleLowerCase().localeCompare(p2.name.toLocaleLowerCase())
                }
            )
        break;

    case 3:
        products
            .sort(
                function (p1, p2) {
                    return p1.price - p2.price
                }
            )
        break;

    default:
        break;
}


console.log(products)
const result = products
    .filter(
        function (p) {
            return p.price > 100000 ? true : false
        }
    )

result
    .forEach(
        function (p) {
            console.log(p.)
        }
    )
    */