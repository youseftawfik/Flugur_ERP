const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addjourline, getalljourl, getJlById, updateJL, deleteJL} = require("../Controllers/journal_linesController")

router.post("/add",  addjourline);
router.get("/",  getalljourl);
router.get("/:id",  getJlById);
router.put("/:id",  updateJL);
router.delete("/:id", deleteJL);

module.exports = router;