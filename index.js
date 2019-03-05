const express = require("express");
//we need path module
const path = require("path");
//init the instance of express
const app = express();
//handlebars
const exphbs = require("express-handlebars");

//members
const members = require("./Members");

//---------
//import logger(Middleware)
// const logger = require("./Middleware/logger");
//now we will initialize or call logger Middleware
// app.use(logger);

//---------
//Handlebars Middleware
//engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//set view engine
app.set("view engine", "handlebars");
// HomePage using Handlebars

app.get("/", (req, res) => {
  res.render("index", {
    title: "Handlebars",
    members
  });
});
//---------
app.use(express.static(path.join(__dirname, "public")));
//---------

//Body Parser Middleware
//without express.json() we can't post object data of a body
app.use(express.json());
//and without express.url() we cant get value from form
app.use(express.urlencoded({ extended: false }));

//using routes from routes/api folder
app.use("/api/members", require("./routes/api/members"));
//as we have define our router here
//we have to remove our routes from routes/api/mem file
//and replace it with "/"

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`server started on ${PORT}`));
