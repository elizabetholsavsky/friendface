const mongoose = require('mongoose');
const { User } = require('../models');
// seed random users using faker npm
const faker = require('faker');

async function seedMockUsers() {
    try {
        const userData = [];

        // generate mock user data
        for (let i = 0; i < 10; i++) {
            const username = faker.internet.userName();
            const email = faker.internet.email();

            // create user object
            const user = new User({
                username,
                email
            });

            userData.push(user);
        }

        // save mock user data to the database
        const savedUsers = await User.create(userData);
        console.log(`${savedUsers.length} users created`);
    } catch (err) {
    console.error('Error seeding mock users', err);
    } finally {
    mongoose.disconnect();
    console.log('Disconnected from the database');
    }
};

async function connectAndSeed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/SocialNetworkAPI', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

        console.log('Connected to the database');

        await User.createIndexes(); // Create indexes for the User model

        await seedMockUsers();
    } catch (err) {
        console.error('Error connecting to the database', err);
    } finally {
        mongoose.disconnect();
        console.log('Disconnected from the database');
    }
};

connectAndSeed();
