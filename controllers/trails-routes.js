const router = require("express").Router();
const { Users, Trails } = require("");

// The `/api/trails` endpoint

router.get("/", (req, res) => {
  // find all trails
  Trails.findAll({
    include: [
      {
        model: Trails,
        attributes: [
          "id",
          "userId",
          "name",
          "difficultyLevel",
          "location",
          "lenght",
          "elevation_gain",
          "est_time",
          "image_link",
        ],
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
