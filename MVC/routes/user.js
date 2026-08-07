const express = require('express')
const {handelGetAllUsers, handelAddNewUser, handelGetUserById,handelUpdateUserInfo,handelDeleteUserById} = require('../controllers/user')

const Route = express.Router();

// PATH-> /api/users/
Route.route('/')
.get(handelGetAllUsers)
.post(handelAddNewUser)

Route.route('/:id')
.get(handelGetUserById)
.patch(handelUpdateUserInfo)
.delete(handelDeleteUserById)


module.exports = Route;
