const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('llll'),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;