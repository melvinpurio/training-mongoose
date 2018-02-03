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
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then((user) => {
    res.send(user);
  }).catch((error) => {
    res.send(error);
  })
});

module.exports = userRouter;
