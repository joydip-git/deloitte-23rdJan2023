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
    if (sessionStorage.getItem('products')) {
        const allProducts = JSON.parse(sessionStorage.getItem('products'))
        allProducts.forEach(
            function (p) {
                const row = createRow(p)
                tbodyElement.appendChild(row)
            }
        )
    } else {
        window.alert('No records found')
    }
}

function filterAndLoadProducts(e) {
    const filterText = e.target.value.toLocaleLowerCase()
    if (sessionStorage.getItem('products')) {
        let records = JSON.parse(sessionStorage.getItem('products'))
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