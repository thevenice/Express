const express = require("express");
const members = require("../../Members");
const router = express.Router();
const uuid = require("uuid");

//get All Members
router.get("/", (req, res) => {
  res.json(members);
});

//Now we will get Single Member
router.get("/:id", (req, res) => {
  //now we need to get :id at the end
  //first we will use res.send() to send data in postman
  //then we will access params in request: req.params.""
  //member.id is number type
  //req.params.id is string type

  //we also throw error if member is not there
  //we will use .some() js method
  //it checks weather the given condition is true or false
  //in some() we will just pass a function that checks memeber.id=params.id
  const found = members.some(member => member.id === parseInt(req.params.id));
  //now apply condition if some() give true run res.json
  //if some() gives false run errormsg
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    //nice try
    // res.send("ERROR UNBLE TO FIND ID NO. :" + req.params.id);
    res
      .status(400)
      .json({ msg: `ERROR UNBLE TO FIND ID NO. : ${req.params.id}` });
  }
  console.log(req.params.id);
});

//Create Members
//mutation in express
//for creating anything we use post()
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "inacitve"
  };

  //if we dont get name and email throw error
  if (!newMember.name || !newMember.email) {
    //we will use res.status() to send status code
    //then we will use json to send newMem object
    return res.status(400).json({ msg: `please include name and email` });
  }

  //then we will push this new member in old members array
  members.push(newMember);
  //res.json()
  //because of security dont show json
  res.json(members);

  //redirect
  // res.redirect("/");
});

//update member details on basis of id
//to update data on server we use put() request
router.put("/:id", (req, res) => {
  //check if id contains same data in our array/db
  //use some()
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    //get request body
    const updateMem = req.body;
    //now compare this new info with each id in members
    //parse update member id in integer
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        // lets  update member/name/email
        member.name = updateMem.name ? updateMem.name : member.name;
        member.email = updateMem.email ? updateMem.email : member.email;
        //send json back
        res.json({ msg: "member updated", member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `ERROR UNBLE TO FIND ID NO. : ${req.params.id}` });
  }
});

//trying to make delete function
router.delete("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: `Member with ID : ${req.params.id} is removed.`,
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res
      .status(400)
      .json({ msg: `No Member with Following ID: ${req.params.id}` });
  }
  console.log(req.params.id);
});
module.exports = router;
