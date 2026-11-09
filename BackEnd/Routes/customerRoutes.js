const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const { addcustomer, getallCustomer, getCustomerById, updateCustomer, updatestatus } = require("../Controllers/customerController")

router.post("/add",  addcustomer);
router.get("/",  getallCustomer);
router.get("/:id",  getCustomerById);
router.put("/:id",  updateCustomer)
router.patch("/status/:id", updatestatus);

module.exports = router;