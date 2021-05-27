const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api/");
const trailsRoute = require("./trails-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/trails", trailsRoute);

module.exports = router;
