const mongoose = require('mongoose');
const { User, Thought } = require('../models/index');
const { faker } = require('@faker-js/faker');

async function seedMockUsers() {
    try {
        const userData = [];

        // generate mock user data
        for (let i = 0; i < 10; i++) {
            const username = faker.internet.userName();
            const email = faker.internet.email();

            // create User object
            const user = new User({
                username,
                email
            });

            userData.push(user);
        }

        // save mock user data to the database
        const savedUsers = await User.create(userData);
        console.log(`${savedUsers.length} users created`);

        // seed thoughts for each user
        for (const user of savedUsers) {
            const thoughtCount = 5; // number of thoughts per user
            const thoughts = [];

            for (let i = 0; i < thoughtCount; i++) {
                const thoughtText = faker.lorem.sentence();
                const username = user.username;

                // create Thought object
                const thought = new Thought({
                    thoughtText,
                    username,
                });

                thoughts.push(thought);
            };

            await Thought.create(thoughts);
            console.log(`${thoughts.length} thoughts created for user ${user.username}`);

            // update the user with the created thoughts
            user.thoughts = thoughts.map((thought) => thought._id);
            await user.save();
        };
    } catch (err) {
        console.error('Error seeding mock users', err);
    } 
};

async function connectAndSeed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/SocialNetworkAPI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to the database');

        await User.createIndexes(); // create indexes for the User model (username, email)
        await seedMockUsers();
    } catch (err) {
        console.error('Error connecting to the database', err);
    } finally {
        mongoose.disconnect();
        console.log('Disconnected from the database');
    }
};

connectAndSeed();