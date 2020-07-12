const { findAllUsers, AddNewUser } = require('../../controllers/user')
const user = require('../../controllers/user')
const route = require('express').Router()


route.get('/', async (req, res) => {
    //we want to send all users as an array from our databse

    const users = await findAllUsers()
    res.status(200).send(users)

})

route.post('/', async (req, res) => {
    //we except here that req will contain name in this
    //so we will create a new user here 
    const { name } = req.body

    const users = await AddNewUser(name)
    res.status(201).send(user)

})

exports = module.exports = route