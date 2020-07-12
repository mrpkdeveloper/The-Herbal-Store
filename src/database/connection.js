const sequelize = require('sequelize')

const db = new sequelize('shopdb', 'shopper', 'shoppass', {      //database  username password
    host: 'localhost',
    dialect: 'mysql',                                            //which dbms using 
    pool: {
        min: 0,
        max: 5
    }
})

//check if connection working properly or not
// db.authenticate()
//     .then(() => { console.log("databse connected successfully") })
//     .catch((e) => { console.log("e") })


module.exports = {
    db
}