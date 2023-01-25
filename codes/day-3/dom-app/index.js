function createFriendsSelect() {
    const selectElement = document.createElement('select')
    // selectElement.style.backgroundColor = 'lime'
    // selectElement.style.fontFamily = 'Segoe UI'

    //will replace old styles by the following styles
    //selectElement.setAttribute('style', 'background-color:lime')
    selectElement.classList.add('selectStyle')
    //will replace old CSS classes by the following
    //selectElement.setAttribute('class', 'selectStyle')

    const selectOption = document.createElement('option')
    const selectOptionText = document.createTextNode('--select--')
    selectOption.appendChild(selectOptionText)
    selectOption.setAttribute('value', 0)
    selectOption.setAttribute('selected', 'selected')
    selectOption.setAttribute('disabled', 'disabled')

    const anilOption = document.createElement('option')
    anilOption.text = 'Anil'
    anilOption.value = 1

    const sunilOption = document.createElement('option')
    sunilOption.text = 'Sunil'
    sunilOption.value = 2

    selectElement.append(selectOption, anilOption, sunilOption)

    const selectDivision = document.getElementById('divSelect')
    selectDivision.appendChild(selectElement)
}

//createFriendsSelect()
window.addEventListener('DOMContentLoaded', createFriendsSelect)