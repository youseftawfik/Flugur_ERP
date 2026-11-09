const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const { addAp_payments, getallpayments, updatestatus } = require("../Controllers/ap_paymentsController")

router.post("/add",  addAp_payments);
router.get("/",  getallpayments);
// router.get("/:id", authenticate, authorize("Accountant"), getJhById);
// router.put("/:id", authenticate, authorize("Accountant"), updateJH)
router.patch("/status/:id",  updatestatus);
// router.delete("/:id", authenticate, authorize("Accounting Manager"), deleteJH);

module.exports = router;