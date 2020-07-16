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
            fetchproductsById(event.target.id, function (product) {
                console.log(product[0])
                addproductstocart(product[0].name, product[0].manufacturer, product[0].price, product[0].productimage, function (p) {
                    // console.log(p)
                    if (p.name == 'SequelizeUniqueConstraintError') {
                        window.alert("product already added to cart")
                    } else {
                        window.alert(p.name + " added to cart")
                    }
                })

            })
        })
    })
})





//executes when page is fully loaded