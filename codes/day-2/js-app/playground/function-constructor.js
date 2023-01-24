//constructor function
function product(pid, pname, pprice, prating, pimage) {
    this.id = pid
    this.name = pname
    this.rating = prating
    this.imageUrl = pimage
    this.price = pprice
    this.print = function () {
        return `${this.name}, ${this.price}, ${this.rating}`
    }
}