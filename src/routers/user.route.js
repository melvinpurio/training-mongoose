const express = require('express');

const userModel = require('../schemas/user.schema');

let userRouter = express.Router();

userRouter.get('/users', (req, res) => {
  
  userModel.find().then((users) => {
    console.log(users)
    res.send(users);  
  });
});

userRouter.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  userModel.findById(req.params.id).then((user) => {
    res.send(user);
  }).catch((error) => {
    res.send(error);
  });
});

userRouter.post('/users', (req, res) => {
  console.log(req.body);
  userModel.create({
    Id: req.body.Id,
    Fname: req.body.Fname,
    Mname: req.body.Mname,
    Lname: req.body.Lname,
    Bday: req.body.Bday,
    Gender: req.body.Gender,
    CivilStatus: req.body.CivilStatus,
    Bplace: req.body.Bplace,
    MobCellNumber: req.body.MobCellNumber,
    email: req.body.email,
    Address: req.body.Address,
    UserName: req.body.UserName,
    password: req.body.password
  }).then((user) => {
    res.send(user);
  }).catch((error) => {
    res.send(error);
  })
});

module.exports = userRouter;
