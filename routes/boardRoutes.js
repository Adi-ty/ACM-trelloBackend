const express = require("express");
const { create } = require("../controllers/boardControllers");
const { getAll } = require("../controllers/boardControllers");
const { getById } = require("../controllers/boardControllers");
const { getActivityById } = require("../controllers/boardControllers");

const { isAuthenticated } = require("../middlewares/Auth");

const router = express.Router();

router.route("/create").post(isAuthenticated, create);
router.route("/getAll").get(isAuthenticated, getAll);
router.route("/getById").get(isAuthenticated, getById);
router.route("/getActivityById").get(isAuthenticated, getActivityById);

module.exports = router;
