const seedUsers = require("./user-seeds");
const seedTrails = require("./trails-seeds");

const sequelize = require("../config/connection");
const { UserTrail } = require("../models");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("--------------");
    const users = await seedUsers();
    const parsedUser = users[0].toJSON();

    const trails = await seedTrails();
    const usertrailData = trails.map((trail) => {
      return {
        trail_id: trail.id,
        user_id: parsedUser.id,
      };
    });
    const userTrails = await UserTrail.bulkCreate(usertrailData);
  } catch (err) {
    console.log(err.message);
  }

  process.exit(0);
};

seedAll();
