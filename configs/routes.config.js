const express = require("express");
const router = express.Router();
const employees = require("../controllers/employees.controller");

router.post("/employees", employees.create);
router.get("/employees", employees.list);
router.get("/employees/oldest", employees.getOldest);
router.get("/employees/:id", employees.get);

module.exports = router;
