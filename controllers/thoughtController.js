const User = require('../models/thoughts');

module.exports = {
    async getAllThoughts(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
};

// ********** /api/thoughts **********

// GET all thoughts

// GET single thought by _id

// POST create new thought (push _id to user's thought array)

// PUT update thought by _id

// DELETE remove thought by _id

// ********** /api/thoughts/:thoughtId/reactions **********

// POST create new reaction (stored in single thought's reactions array)

// DELETE remove reaction using reactionId