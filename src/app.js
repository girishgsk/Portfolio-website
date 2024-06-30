const express = require("express");
const hbs = require("hbs");
const path = require("path");
const { send } = require("process");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ========  For the tempelates Engine ===========
const tempelatesfile = path.join(__dirname, "../tempelates/views");
const partialfile = path.join(__dirname, "../tempelates/partials");
app.set("views engine", "hbs");
app.set("views", tempelatesfile);

const staticfile = path.join(__dirname, "../public");
// console.log(staticfile);
app.use(express.static(staticfile));

//=========For The Partial=============
hbs.registerPartials(partialfile);

app.get("/", (req, res) => {
  //   res.send("welcome to the nodejs backend");
  res.render("home.hbs");
});
app.get("/skills", (req, res) => {
  //   res.send("welcome to the nodejs backend");
  res.render("skills.hbs");
});
app.get("/experience", (req, res) => {
  //   res.send("welcome to the nodejs backend");
  res.render("experience.hbs");
});

app.post("/", (req, res) => {
  res.render("home.hbs");
});
app.post("/skills", (req, res) => {
  res.render("skills.hbs");
});
app.post("/experience", (req, res) => {
  res.render("experience.hbs");
});

app.get("*", (req, res) => {
  res.render("404.hbs");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port} `);
});
