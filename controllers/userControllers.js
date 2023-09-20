const db = require("../model/userModel");

//@METHOD GET
// URL = /api/user
// URL = /api/user/id
//GET ALL USER AND GET SINGLE USER
const find = (req, res) => {
  db.find().then((data) => {
    res.send(data);
  });
};

//GET SINGLE USER

const findOne = (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then((data) => {
      if (!data) return res.send("Cannot find id");
      else return res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//@METHOD POST
// URL = /api/user
const create = async (req, res) => {
  const { name, email, status, gender } = req.body;

  if (!name || !email || !status || !gender) {
    return res.render("add_user", { msg: "fill all details" });
  }

  const userdb = await db.create({
    name,
    email,
    gender,
    status,
  });

  return res.render("add_user", { msg: "data inserted successfully" });
};

//@METHOD PUT
// URL = /api/user/id
const update = async (req, res) => {
  const id = req.query.id;
  const { name, email, status, gender } = req.body;

  if (!name || !email || !status || !gender) {
    return res.status(400).send("cannot be emtpy");
  }

  const update = await db.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

module.exports = { find, create, update, findOne };
