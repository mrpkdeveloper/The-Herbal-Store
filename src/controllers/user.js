const { users } = require('../database/models')

async function AddNewUser(name) {
    const new_user = await users.create({
        name,
        ignoreDuplicates: true
    })


    return new_product
}

async function findAllUsers() {
    const all_User = await users.findAll({
        // include: [Users]                  //We can only do this because of the relation we've provided before
    })
    return all_User
}

// test
// async function task() {

//     // console.log(await AddNewProduct('sample-4', 20, 'patanjali'))

//     const products = await findAllProducts()
//     for (let p of products) {
//         console.log(`${p.id}\n${p.name}\n${p.price}\n${p.manufacturer}\n===============\n `)
//     }
// }
// task();

module.exports = {
    findAllUsers,
    AddNewUser
}