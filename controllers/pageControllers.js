const db = require("../model/userModel");

const home = async (req, res) => {
  const find = await db.find();
  // console.log(find);
  res.render("index", { find });
};

const addUser = (req, res) => {
  res.render("add_user");
};

const updateUser = async (req, res) => {
  const id = req.query.id;

  const result = await db.findById(id);

  console.log(result);

  res.render("update_user", {
    result,
    id,
    male: result.gender === "Male",
    female: result.gender === "Female",
    Active: result.status === "Active",
    Inactive: result.status === "Inactive",
  });
};

const deleteUser = (req, res) => {
  const id = req.query.id;
  db.findByIdAndDelete(id).then((data) => {
    if (!data) return res.send("Cannot find id to delete");
    else return res.redirect("/");
  });
};

module.exports = { home, addUser, updateUser, deleteUser };
