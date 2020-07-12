const { db, users, products, cart } = require('./models')

const seed = async () => {
    try {

        // db.sync({ alter: true })
        await users.bulkCreate([
            { name: "Prateek" },
            { name: "Varun" },

        ], {
            ignoreDuplicates: true
        })

        await products.bulkCreate([
            { name: "sample-1", manufacturer: "Patanjali", price: "90" },
            { name: "sample-2", manufacturer: "Patanjali", price: "100" },
        ], {
            ignoreDuplicates: true
        })
        await cart.bulkCreate([
            { name: "sample-1", manufacturer: "Patanjali", price: "90" },
        ], {
            ignoreDuplicates: true
        })

    } catch (e) {
        console.log(e)
    }
}

seed()