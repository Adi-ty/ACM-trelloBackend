const express = require("express");
const { create } = require("../controllers/boardControllers");
const { isAuthenticated } = require("../middlewares/Auth");

const router = express.Router();

router.route("/create").post(isAuthenticated, create);

module.exports = router;
