$(function () {

    let product_name = $('#Productname')
    let manufacturer = $('#Manufacturer')
    let price = $('#Price')
    let productimage = $('#myfile')
    let btn_submit = $('#submit')


    btn_submit.click(function () {
        console.log("buttonclicked")
        // console.log(productimage)
        // var formdata = new FormData()
        // formdata.append('productimage', $('#myfile').files[0])
        addproducts(
            product_name.val(),
            manufacturer.val(),
            price.val(),
            // productimage.val(),
            function (addedproduct) {
                window.alert("added" + addedproduct.name + "to the database")
            }
        )
    })


}
)