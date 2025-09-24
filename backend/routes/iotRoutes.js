const express = require("express");
const { handleIoTTrigger } = require("../controllers/iotController");
const router = express.Router();

router.post("/trigger", handleIoTTrigger);

module.exports = router;
