const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const trailsRoutes = require("./trails-routes");

router.use("/users", userRoutes);
router.use("/trails", trailsRoutes);

module.exports = router;
