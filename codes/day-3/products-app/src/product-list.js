function createColumn(data) {
    const td = document.createElement('td')
    td.innerText = data
    return td
}

function createRow(p) {
    const tdName = createColumn(p.name)
    const tdPrice = createColumn(p.price.toString())
    const tdRating = createColumn(p.rating.toString())

    const tdImage = createColumn('')
    const img = document.createElement('img')
    img.setAttribute('src', p.image)
    img.setAttribute('alt', 'NA')
    img.setAttribute('title', p.name)
    img.classList.add('imgStyle')
    tdImage.appendChild(img)

    const tr = document.createElement('tr')
    tr.append(tdImage, tdName, tdPrice, tdRating)
    return tr
}

function loadData() {
    const tbodyElement = document
        .getElementById('tblProductsBody')
    products.forEach(
        function (p) {
            const row = createRow(p)
            tbodyElement.appendChild(row)
        }
    )
}

function filterAndLoadProducts(e) {
    const filterText = e.target.value.toLocaleLowerCase()
    let records = products
    if (filterText !== '') {
        records = products.filter(
            function (p) {
                const pname = p.name.toLocaleLowerCase()
                return pname.indexOf(filterText) !== -1
            }
        )
    }
    const tbodyElement = document
        .getElementById('tblProductsBody')
    tbodyElement.innerHTML = ''
    records.forEach(
        function (p) {
            const row = createRow(p)
            tbodyElement.appendChild(row)
        }
    )
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        loadData()
        document
            .getElementById('txtFilter')
            .addEventListener('keyup', filterAndLoadProducts)
    }
)