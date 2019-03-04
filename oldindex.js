const express = require("express");
//we need path module
const path = require("path");
//init the instance of express
const app = express();

const members = [
  {
    id: 01,
    name: "Robert DeNerio",
    email: "rd_nerio@mail.com",
    status: "active"
  },
  {
    id: 02,
    name: "Michael Jackson",
    email: "mj@mail.com",
    status: "inactive"
  },
  {
    id: 03,
    name: "Emma Roberts",
    email: "emma@mail.com",
    status: "active"
  },
  {
    id: 04,
    name: "Nobita",
    email: "nobi@mail.com",
    status: "inactive"
  }
];
//using get() method to render data on specific route
//this route gets members
app.get("/api/members", (req, res) => {
  res.json(members);
});

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
