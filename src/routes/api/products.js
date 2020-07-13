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

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(new Error('file type does not support'), false)
    }
}
const upload = multer({
    storage: storage, limits: {
        FileSize: 1824 * 1024 * 5
    },
    fileFilter: filefilter
})





//routes

route.get('/', async (req, res) => {
    //get all products
    const products = await findAllProducts()
    res.status(200).send(products)
})

route.post('/', upload.single('productimage'), async (req, res) => {
    //add new products
    // console.log(req.file)
    const { name, price, manufacturer } = req.body
    const productimage = req.file.path

    if ((!name) || (!price) || (!manufacturer)) {
        return res.status(400).send({
            error: 'Need name, price and manufacturer to create new product'
        })
    }
    const products = await AddNewProduct(name, price, manufacturer, productimage)
    res.status(201).send(products)

})

module.exports = route