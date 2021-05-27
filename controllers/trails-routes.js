const router = require("express").Router();
const { User, Trail } = require("../models");

// The `/api/trails` endpoint

router.get("/", (req, res) => {
  // find all trails
  Trail.findAll({
    attributes: [
      "id",
      "user_id",
      "name",
      "difficulty_level",
      "location",
      "length",
      "elevation_gain",
      "est_time",
      "image_link",
    ],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbTrailsData) => res.json(dbTrailsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated trails
});

module.exports = router;
