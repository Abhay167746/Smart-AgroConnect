const express = require("express");
const { predictCrop } = require("../controllers/predictController");
const router = express.Router();

router.post("/", predictCrop);

module.exports = router;
