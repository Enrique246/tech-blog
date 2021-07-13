const User = require('./User');
const sequelize = require('sequelize')

User.belongsToMany(Classes,{
    through:"reservations",
})

//Commets and blogpost
//Posts belongsTo User
//Posts hasMany Comments
//Commets belongsToMany Users
Classes.belongsToMany(User,{
    through:"reservations",
})

module.exports = { Classes, Reservation, User};
