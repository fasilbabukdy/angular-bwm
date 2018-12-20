const express = require('express');
const mongoose = require('mongoose');
const dev = require('./config/dev');
const rental = require('./routes/rentals.routes');
// const FakeDb = require('./helper/fake-db');

const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose
  .connect(
    dev.dbURi,
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log('Mongodb Connected');
    //const fakeDb = new FakeDb();
    //fakeDb.seedDb();
  })
  .catch(error => console.error('Mongodb disconnected', error));

app.use('/api/v1/rentals', rental);

server.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});
