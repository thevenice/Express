//import moment
const moment = require("moment");

//now we will create a Middleware
// it will be a logger function
// it will take 3 params (req,res,next)
//here next is next function to run after resloving
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}:${req.hostname}${req.originalUrl}: ${moment().format()}`
    // output: http:localhost/api/members 2019-03-04T20:00:06+05:30
  );
  next();
};

module.exports = logger;
