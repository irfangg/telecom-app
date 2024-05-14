const express = require("express");

const { getPrivateData, addCustomer, getCustomers, modifyPlan } = require("../controllers/private");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(protect, getPrivateData);
router.route("/customers").post(protect, addCustomer);
router.route("/customers").get(protect, getCustomers);
router.route("/customers/plan").post(protect, modifyPlan);


module.exports = router;
