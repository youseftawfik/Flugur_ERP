const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addjnh, getalljnh, getJhById, updateJH, updatestatus, deleteJH} = require("../Controllers/Journal_HeaderController")

router.post("/add", addjnh);
router.get("/getalljnh",  getalljnh);
router.get("/:id",  getJhById);
router.put("/:id", updateJH)
router.patch("/status/:id",  updatestatus);
router.delete("/:id", deleteJH);

module.exports = router;