const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const hbs = require("hbs");
const connectDB = require("./mongoSetup");

const port = process.env.PORT || 8000;
app.use(express.urlencoded());
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views", "include"));
hbs.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});
app.use("/", require("./routes/pageRoutes"));
app.use("/api", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`servering running on port ${port}`);
});
