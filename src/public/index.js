$(function () {
    console.log("in index.js")
    let productlist = $('#productlist')


    fetchproducts(function (products) {
        // p = products
        console.log("in fetch product function")
        productlist.empty()
        for (product of products) {
            productlist.append(createproductcard(product))
        }

    }).then(() => {
        console.log("inside then")
        // console.log()
        let buy_btn = $('.btn')

        console.log("in index.js for cart purpose")

        buy_btn.click(function (event) {
            console.log("button clicked")
            console.log(event.target.id)
        })
    })






})





//executes when page is fully loaded