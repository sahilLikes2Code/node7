var express = require("express");
var router = express.Router();
var User = require("../model/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//create a user with post request
router.post("/", function (req, res, next) {
  // User.create(req.body, (err, createdUser) => {
  //   if (err) return next(err);
  //   res.send(createdUser);
  // });
  console.log(req.body);
  res.end();
});

//update a user with put request
router.put("/update/:id", (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    { name: "robin sharma" },
    { new: true },
    (err, updatedUser) => {
      if (err) return next(err);
      res.send(updatedUser);
    }
  );
});

//remove a user with delete request
router.delete("/delete/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send("user successfully deleted");
  });
});

//render form
router.get("/new", (req, res, next) => {
  res.render("userForm");
});

//submission of form
// router.post("/create", (req, res, next) => {
//   res.render("userForm");
// });

module.exports = router;
