const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addAr_invoices, getallAr_invoices, getJARById, getJARByStatus, getCustomerAging, updatestatus, deleteAR, getARSummaryByDate} = require("../Controllers/ar_invoicesController")

router.get("/ar",  getARSummaryByDate);
router.post("/add",  addAr_invoices);
router.get("/",  getallAr_invoices);
router.get("/all/:id",  getJARById);
router.get("/:id/aging",  getCustomerAging);
router.patch("/status/:id",  updatestatus);

router.get("/:status",  getJARByStatus);
router.delete("/:id",  deleteAR);

module.exports = router;