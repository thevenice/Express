//Basic Express BoilerPlate

//import Express
const express = require("express");

//create an instance of express API
const app = express();

//create endpoints/route handlers
//using .get("path url", callback)
//in callback req and res position matters
app.get("/", (req, res) => {
  res.send("hello Express World!");
});

//call this endpoint/ start server
app.listen(5555, console.log("Server is running on port 5555"));
