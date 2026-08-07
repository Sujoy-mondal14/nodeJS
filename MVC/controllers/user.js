const usersData = require('../models/user')

const handelGetAllUsers = async (req, res) => {
    const allUsers = await usersData.find({});

    return res.json(allUsers);
}

const handelAddNewUser = async (req, res) => {
    const body = req.body

    if (!body.firstName || !body.email || !body.gender || !body.jobTitle) return res.status(400).json({ err: 'fill requirds' })

    const user = await usersData.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })

    return res.status(201).json({ err: 'succesfully user creted' })
}

async function handelGetUserById(req, res){
    const user = await usersData.findById(req.params.id);

    if(!user) return res.status(400).json({err: 'user not found'});
    return res.json(user);
}

async function handelUpdateUserInfo(req,res){
    const body = req.body
    await usersData.findByIdAndUpdate(req.params.id, body)

    return res.json({err: 'update succesfull'});
}

const handelDeleteUserById = async (req,res) => {
    await usersData.findByIdAndDelete(req.params.id);

    return res.json({err: 'user deletion succesfull'});
}

module.exports = {
    handelGetAllUsers,
    handelAddNewUser,
    handelGetUserById,
    handelUpdateUserInfo,
    handelDeleteUserById
}