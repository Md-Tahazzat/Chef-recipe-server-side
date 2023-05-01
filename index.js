const express = require("express");
const cors = require("cors");
const app = express();
const chefData = require("./data.json");

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Yummy Yums projects running");
});

app.get("/chefs", (req, res) => {
  res.send(chefData);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const mathchedData = chefData.find((chef) => chef.id == id);
  res.send(mathchedData);
  console.log(mathchedData);
});

app.listen(port, () => {
  console.log("Yummy Yums server is running to port", port);
});
