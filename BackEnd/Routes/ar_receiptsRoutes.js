const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addAr_receipts, getallAr_receipts, getAr_receiptsBycustomer, getAR_invoicesById} = require("../Controllers/ar_receiptsController")

router.post("/add",  addAr_receipts);
router.get("/",  getallAr_receipts);
router.get("/all/:id",  getAr_receiptsBycustomer);


router.get("/:id",  getAR_invoicesById);

module.exports = router;