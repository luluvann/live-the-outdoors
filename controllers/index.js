const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const apiRoutes = require("./api/");

router.use("/", homeRoutes);
router.use("/api/v1/", apiRoutes);
router.use 

module.exports = router;
