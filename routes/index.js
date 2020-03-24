const express = require("express");
let router = express.Router();

router.use("/api", require("./api.js"));
router.use("/mock", require("./mock.js"));
router.use("/es", require("./es.js"));

module.exports = router;
