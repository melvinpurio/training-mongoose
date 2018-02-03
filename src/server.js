const express = require('express');
const mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/melvin1');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./routers/user.route');

app.use('/', userRouter);

app.listen(3000, () => {
  console.log('server listening');
});