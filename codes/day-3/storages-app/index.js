const arr = []

function saveData() {
    const txtObject = document.querySelector('#txtValue')
    //storage.push(txtObject.value)
    var obj = { val: txtObject.value }
    //var data = 100
    //'{ "val":  }'
    arr.push(obj)
    //var obj ={name:'anil', id:1, salary: 100, print:function(){}}
    //{"name":"anil", "id":1, "salary": 100, "isManager":true, }

    //sessionStorage.setItem('data', txtObject.value)
    // sessionStorage.setItem('data', JSON.stringify(obj))
    sessionStorage.setItem('data', JSON.stringify(arr))
}
window.addEventListener('DOMContentLoaded',
    function () {
        const buttonObject = document.querySelector('#btnSave')
        buttonObject.addEventListener('click', saveData)
    }
)