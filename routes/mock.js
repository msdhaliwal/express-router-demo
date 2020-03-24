const express = require("express");
let router = express.Router();

router.get("/*", (req, res) => {
  return res.send("mock route");
});

module.exports = router;
