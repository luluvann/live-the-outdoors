// import models
const Trail = require("./Trail");
const User = require("./User");
const UserTrail = require("./UserTrail");

// User.hasMany(Trail, {
//   foreignKey: "user_id",
// });

// Trail.belongsTo(User, {
//   foreignKey: "user_id",
//   as: "user",
// });

// Users belongToMany Trails (through UserTrail)
User.belongsToMany(Trail, {
  through: "usertrails",
  foreignKey: "user_id",
  otherKey: "trail_id",
  as: "trails",
});
// Trails belongToMany Users (through UserTrail)
Trail.belongsToMany(User, {
  through: "usertrails",
  foreignKey: "trail_id",
  otherKey: "user_id",
  as: "users",
});

module.exports = {
  User,
  Trail,
  UserTrail,
};
