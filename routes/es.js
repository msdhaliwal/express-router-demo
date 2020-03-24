const express = require("express");
let router = express.Router();

router.get("/*", (req, res) => {
  return res.send("es route");
});

module.exports = router;
