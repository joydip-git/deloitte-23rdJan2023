window.addEventListener('DOMContentLoaded',
    function () {
        document
            .querySelector('#btnAdd')
            .addEventListener('click',
                function () {
                    const id = Number(document
                        .querySelector('#txtId').value)

                    const name = document
                        .querySelector('#txtName').value

                    const rating = Number(document
                        .querySelector('#txtRating').value)

                    const price = Number(document
                        .querySelector('#txtPrice').value)

                    const allFiles = document
                        .querySelector('#fileImage').files

                    const uploadedFile = allFiles[0]

                    //FileReader to read image data and create BLOB (Binary Large Object)
                    const reader = new FileReader()

                    //this event will be fired when the reading of image data is over
                    reader.addEventListener(
                        'load',
                        function () {
                            const imageBlob = reader.result
                            //since image data reading is over, we can create an object
                            const p = new Product(id, name, price, rating, imageBlob)
                            //save the object in the existing array
                            const existingProducts = sessionStorage
                                .getItem('products')

                            if (existingProducts) {
                                const jsProducts = JSON.parse(existingProducts)
                                jsProducts.push(p)
                                sessionStorage
                                    .setItem('products',
                                        JSON.stringify(jsProducts)
                                    )
                            } else {
                                sessionStorage.setItem(
                                    'products', JSON.stringify([p]))
                            }
                        }
                    )
                    //this line is reading image data and will convert to BLOB asynchronously
                    reader.readAsDataURL(uploadedFile)
                }
            )
    }
) 