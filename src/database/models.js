const { db } = require('./connection')
const { DataTypes } = require('sequelize')

const users = db.define('users', {              //table name user with following attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

})


const products = db.define('products', {              //table name products with following attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0

    }

})

const cart = db.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0

    }

})

// db.sync()
//     .then(() => console.log('database synced successfully'))
//     .catch((err) => console.error("error in creating database"))


module.exports = {
    db, users, products, cart
}