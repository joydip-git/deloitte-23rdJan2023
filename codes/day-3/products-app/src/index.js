function createColumn(data) {
    const td = document.createElement('td')
    td.innerText = data
    return td
}
function loadData() {
    const tbodyElement = document.getElementById('tblProductsBody')

    products.forEach(
        function (p) {
            const tdName = createColumn(p.name)
            const tdPrice = createColumn(p.price.toString())
            const tdRating = createColumn(p.rating.toString())

            const tdImage = createColumn('')
            const img = document.createElement('img')
            img.setAttribute('src', p.image)
            img.setAttribute('alt', 'NA')
            img.setAttribute('title', p.name)
            tdImage.appendChild(img)

            const tr = document.createElement('tr')
            tr.append(tdImage, tdName, tdPrice, tdRating)
            tbodyElement.appendChild(tr)
        }
    )
}
window.addEventListener('DOMContentLoaded', loadData)