var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ message: "Welcome to the API" });
});

router.get("/test", function (req, res) {
  res.json({ message: "test" });
});

module.exports = router;
