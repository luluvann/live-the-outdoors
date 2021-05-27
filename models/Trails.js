const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Trails extends Model {}

Trails.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      defaultValue: Sequelize.UUIDV4,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    difficultyLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    length: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },

    elevation_gain: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    est_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "trails",
  }
);

module.exports = Trails;
