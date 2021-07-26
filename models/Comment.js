const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Building object
class Comment extends Model {}

Comment.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    text_comment:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:
        //Making sure there is at least one character inside the comment box
        {len: [1]},
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    post_id:{
        //The id of the post it is referenced to 
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },
    }
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }

);

module.exports = Comment;
