const { findAllProducts, AddNewProduct } = require('../../controllers/product')
const route = require('express').Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const upload = multer({ storage: storage })

route.get('/', async (req, res) => {
    //get all products
    const products = await findAllProducts()
    res.status(200).send(products)
})

route.post('/', upload.single('productimage'), async (req, res) => {
    //add new products
    // console.log(req.file)
    const { name, price, manufacturer } = req.body

    if ((!name) || (!price) || (!manufacturer)) {
        return res.status(400).send({
            error: 'Need name, price and manufacturer to create new product'
        })
    }
    const products = await AddNewProduct(name, price, manufacturer)
    res.status(201).send(products)

})

module.exports = route