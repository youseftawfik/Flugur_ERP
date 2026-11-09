const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addGlAccount, getallaccounts, updateAccount, deleteaccount, updatestatus} = require("../Controllers/glController")

router.post("/add",  addGlAccount);
router.get("/accounts",  getallaccounts);
router.put("/:id",  updateAccount)
router.delete("/:id",  deleteaccount);
router.patch("/status/:id",  updatestatus);

module.exports = router;