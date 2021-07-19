const sequelize = require('../config/connection');
const { User,Comment,Post } = require('../models');

const commentData = require('./commentData.json');
const postData = require('./postData.json'); 
const userData = require('./userData.json'); 

const seedDatabase = async () => {
  try{
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);
} catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedDatabase();
