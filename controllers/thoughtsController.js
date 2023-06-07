const Thought = require('../models/thought');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // async createReaction(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // async removeReaction(req, res) {
    //     try {

    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
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