function createHeader() {
    const headerObject = document.createElement('h2')
    headerObject.innerText = 'Welcome to JS'
    //document.body.appendChild(headerObject)

    const lineBreakObject = document.createElement('br')
    const buttonObject = document.createElement('button')
    buttonObject.innerText = 'Click Me!!!'
    buttonObject.setAttribute('id', 'btnClick')
    buttonObject.setAttribute('style', 'background-color:"beige";font-size:"medium"')
    //buttonObject.classList.add('','','')
    buttonObject.addEventListener('click',
        function () {
            alert('Hi....')
        })
    document.body.append(headerObject, lineBreakObject, buttonObject)
}
window.addEventListener('DOMContentLoaded', createHeader)