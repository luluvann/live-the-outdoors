const seedUsers = require("./user-seeds");
const seedTrails = require("./trails-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  const users = await seedUsers();
  const parsedUser = users[0].toJSON();

  await seedTrails(parsedUser.id);
  console.log("--------------");

  process.exit(0);
};

seedAll();
