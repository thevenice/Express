const express = require("express");
//we need path module
const path = require("path");
//init the instance of express
const app = express();

//---------
//import logger(Middleware)
// const logger = require("./Middleware/logger");
//now we will initialize or call logger Middleware
// app.use(logger);
//---------
app.use(express.static(path.join(__dirname, "public")));

//Body Parser Middleware
//without express.json() we can't post object data of a body
app.use(express.json());
//and without express.url() we cant get value from form
app.use(express.urlencoded());

//using routes from routes/api folder
app.use("/api/members", require("./routes/api/members"));
//as we have define our router here
//we have to remove our routes from routes/api/mem file
//and replace it with "/"

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`server started on ${PORT}`));
