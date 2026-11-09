const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const { addvendor, getallvendor, getvendorById, updateVendor, updatestatus } = require("../Controllers/vendorsController")

router.post("/add",  addvendor);
router.get("/",  getallvendor);
router.get("/:id",  getvendorById);
router.put("/:id",  updateVendor)
router.patch("/status/:id", updatestatus);

module.exports = router;