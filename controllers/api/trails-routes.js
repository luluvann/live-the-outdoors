const router = require("express").Router();
const { User, Trail } = require("../../models");

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
      "fav_trail",
      "completed",
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

router.get("/:id", (req, res) => {
  Trail.findOne({
    where: {
      id: req.params.id
    }, attributes: [
      "id",
      "user_id",
      "name",
      "difficulty_level",
      "location",
      "length",
      "elevation_gain",
      "est_time",
      "image_link",
      "fav_trail",
      "completed",
    ],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "username"],
      },
    ],
  })
    .then((dbTrailsData) => {
      if (!dbTrailsData) {
        res.status(404).json({ message: "No trails found with this id" });
        return;
      }
      res.json(dbTrailsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Trail.create(req.body)
    .then((trail) => {
      res.status(201).json(trail);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//For updating trails
router.put("/:id", (req, res) => {
  Trail.findByPk(req.params.id)
    .then((trail) => {
      console.log("trail", trail);
      if (!trail) {
        res.status(404).json({ message: "trail does not exist" });
        return;
      }
      console.log("trail", req.body);
      return trail.update(req.body);
    })
    .then((updatedTrail) => {
      res.status(200).json({ trail: updatedTrail });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Trail.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((trail) => {
      res.status(200).json({ message: "Trail deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
