const User = require('../models/user');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // async getSingleUser(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async createUser(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async updateUser(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async removeUser(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async addFriend(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async deleteFriend(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
};

// ********** /api/users **********

// GET all users

// GET single user by _id, populate thought and friend data

// POST new user

// PUT update user by _id

// DELETE remove user by _i BONUS remove associated thoughts on deletion

// ********** /api/users/:userId/friends/:friendId**********

// POST add new friend to user friend list

// DELETE remove friend from user friend list