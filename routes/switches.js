const express = require("express");
const router = express.Router();
const switchController = require("../controllers/switchController");

router.get("/", switchController.getSwitches);
router.post("/", switchController.addSwitch);
router.put("/:id", switchController.updateSwitch);
router.delete("/:id", switchController.deleteSwitch);

module.exports = router;
