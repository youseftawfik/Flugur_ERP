const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addAp_invoices, getallAp_invoices, getJAPById, getJAPByStatus, getVendorAgingSummary, updatestatus, getAPSummaryByDate, getAp_invoicesById} = require("../Controllers/ap_invoicesController")
const {trainAI} = require("../Controllers/AI_Model/AP_AI_Model")

router.get("/ap",  getAPSummaryByDate);
router.post("/add",  addAp_invoices);
router.get("/",  getallAp_invoices);
router.get("/all/:id",  getJAPById);
router.get("/:id",  getAp_invoicesById);
router.get("/:id/aging",  getVendorAgingSummary);
router.patch("/status/:id",  updatestatus);

router.get("/:status",  getJAPByStatus);

router.post("/train", trainAI);

module.exports = router;