const { findAllProducts, AddNewProduct } = require('../../controllers/product')
const route = require('express').Router()

route.get('/', async (req, res) => {
    //get all products
    const products = await findAllProducts()
    res.status(200).send(products)
})

route.post('/', async (req, res) => {
    //add new products
    const { name, price, manufacturer } = req.body

    if ((!name) || (!price) || (!manufacturer)) {
        return res.status(400).send({
            error: 'Need name, price and manufacturer to create new product'
        })
    }
    const products = await AddNewProduct(name, price, manufacturer)
    res.status(201).send(products)



    // product.create({
    //     name: req.body.name,
    //     price: parseFloat(req.body.price),
    //     manufacturer: req.body.manufacturer

    // })
    //     .then((product) => {
    //         res.status(201).send(product)
    //     })
    //     .catch((err) => {
    //         res.status(501).send({ error: "could not add new products" })
    //     })
})

module.exports = route