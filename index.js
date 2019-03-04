const express = require("express");
//we need path module
const path = require("path");
//init the instance of express
const app = express();

//now cannot GET "/" it means it unable to find the route hanlder for port "/"

//create a route handler using get request handler()
// app.get("/", (req, res) => {
//   // res.send("<h1>HI i am at home page</h1>");
//   // res.sendFile(path.join(__dirname, "Notes.html"));

// });
//---------------

//set a static  folder(dirname,and folder name only)
app.use(express.static(path.join(__dirname, "public")));
//---------------

//create a port variable
const PORT = process.env.PORT || 5000;

//start app using  .listen()
app.listen(PORT, _ => console.log(`server started on ${PORT}`));
