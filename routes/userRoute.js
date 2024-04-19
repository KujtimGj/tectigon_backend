const express = require("express");
const router = express.Router();
const { getAllUsers, signupUsers } = require("../controller/userController");

router.get("/", getAllUsers);
router.post("/signup",signupUsers);


module.exports = router;
