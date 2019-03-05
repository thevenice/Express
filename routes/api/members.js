const express = require("express");
const members = require("../../Members");
const router = express.Router();
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

module.exports = router;
