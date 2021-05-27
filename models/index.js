// import models
const Trails = require("./Trails");
const User = require("./User");

// Products belongsTo Category
User.hasMany(Trails, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Trails,
};
