const express = require("express");
const { addProduce, getProduce, getProduceByUser } = require("../controllers/produceController");
const router = express.Router();

router.post("/", addProduce);
router.get("/", getProduce);
router.get("/:userId", getProduceByUser);

module.exports = router;
