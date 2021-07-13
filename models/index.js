const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')


//Commets and Posts

//User and post relationships

//Posts belongsTo User
Post.belongsTo(User,{
    foreignKey:"user_id",
})

User.hasMany(Post,{
    foreignKey:"user_id",
})

//Comments
User.hasMany(Comment, {
    foreignKey: "user_id",
  });
 //Posts hasMany Comments 
  Post.hasMany(Comment, {
    foreignKey: "post_id",
  });
  //Commets belongsTo Users
  Comment.belongsTo(User,{
      foreignKey:"user_id",
  })
  Comment.belongsTo(Post,{
      foreignKey:"post_id",
  })

module.exports = { Post, Comment, User};
