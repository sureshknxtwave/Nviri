const express = require("express");
const router = express.Router();
const { getFeaturedTechnicians, loginTechnician } = require("../controllers/technicianController");

router.get("/", getFeaturedTechnicians);
router.post("/login", loginTechnician);

module.exports = router;
