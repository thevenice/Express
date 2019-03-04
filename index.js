const express = require("express");
//we need path module
const path = require("path");
//init the instance of express
const app = express();

//get members module
const members = require("./Members");
app.get("/api/members", (req, res) => {
  res.json(members);
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`server started on ${PORT}`));
