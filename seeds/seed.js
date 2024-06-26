// const seedUsers = require('./user'); This helps dictate what happens with the data depending on variables searched - again ensured that variables are consistant //

const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();