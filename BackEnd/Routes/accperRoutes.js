const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addaccperiod, getallaccperiods, updatestatus, deleteaccount} = require("../Controllers/accperiodController")

router.post("/add", addaccperiod);
router.get("/acc_periods",  getallaccperiods);
router.patch("/status/:id",  updatestatus);
router.delete("/:id",  deleteaccount);

module.exports = router;