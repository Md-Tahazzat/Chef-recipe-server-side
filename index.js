const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Yummy Yums projects running");
});

app.listen(port, () => {
  console.log("Yummy Yums server is running to port", port);
});
