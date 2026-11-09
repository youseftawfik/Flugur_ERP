const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const { addAp_invoiceslines, getallAp_invoices, getAp_invoicesById, updateAp_invoicesline } = require("../Controllers/ap_invoice_linesController")

router.post("/add",  addAp_invoiceslines);
router.get("/",  getallAp_invoices);
router.get("/:id",  getAp_invoicesById);
router.put("/:id",  updateAp_invoicesline)

module.exports = router;