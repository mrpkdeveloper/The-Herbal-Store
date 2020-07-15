$(function () {
    console.log("in index.js")
    let productlist = $('#productlist')

    fetchproducts(async function (products) {
        console.log("in fetch product function")
        productlist.empty()
        for (product of products) {
            productlist.append(createproductcard(product))
        }
    }).then(() => {
        console.log("isnside then")
        let buy_btn = $('#button-1')

        console.log("in index.js for cart purpose")

        buy_btn.click(function () {
            console.log("button clicked")
        })
    })






})





//executes when page is fully loaded