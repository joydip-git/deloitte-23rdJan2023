window.addEventListener('DOMContentLoaded',
    function () {
        const jsonArr = sessionStorage.getItem('data')
        if (jsonArr) {

            const jsArray = JSON.parse(jsonArr)
            jsArray.forEach(
                function (d) {
                    const li = document.createElement('li')
                    li.innerText = d.val
                    document
                        .querySelector('#listValues')
                        .appendChild(li)
                }
            );

        } else {
            document.write('No values found')
        }
    }
)