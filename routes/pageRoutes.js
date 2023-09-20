const express = require("express");
const router = express.Router();
const {
  home,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/pageControllers");

router.get("/", home);

router.get("/add-user", addUser);

router.get("/update-user", updateUser);

router.get("/user/delete", deleteUser);

module.exports = router;
