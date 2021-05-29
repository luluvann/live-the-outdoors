// import models
const Trail = require("./Trail");
const User = require("./User");

// Products belongsTo Category
User.hasMany(Trail, {
  foreignKey: "user_id",
});

Trail.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

module.exports = {
  User,
  Trail,
};
