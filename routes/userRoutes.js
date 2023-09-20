const express = require("express");
const router = express.Router();
const {
  find,
  create,
  update,

  findOne,
} = require("../controllers/userControllers");

router.get("/user", find);

router.get("/user/:id", findOne);

router.post("/user", create);

router.post("/update", update);



module.exports = router;
