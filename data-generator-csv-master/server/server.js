const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('dataSource');

  const firstNameCreator = db.collection('firstName');
  const firstNameRouter = createRouter(firstNameCreator);
  app.use('/api/firstnames', firstNameRouter);

  const lastNameCreator = db.collection('lastName');
  const lastNameRouter = createRouter(lastNameCreator);
  app.use('/api/lastnames', lastNameRouter);

  const emailCreator = db.collection('email');
  const emailRouter = createRouter(emailCreator);
  app.use('/api/emails', emailRouter);

  const addressCreator = db.collection('address');
  const addressRouter = createRouter(addressCreator);
  app.use('/api/address', addressRouter);

  const carCreator = db.collection('cars');
  const carRouter = createRouter(carCreator);
  app.use('/api/cars', carRouter);

  const vanCreator = db.collection('vans');
  const vanRouter = createRouter(vanCreator);
  app.use('/api/vans', vanRouter);

  const langCreator = db.collection('languages');
  const langRouter = createRouter(langCreator);
  app.use('/api/languages', langRouter);

  const phoneNoCreator = db.collection('phonenumbers');
  const phoneNoRouter = createRouter(phoneNoCreator);
  app.use('/api/phonenumbers', phoneNoRouter);

  const csvCreator = db.collection('csv');
  const csvRouter = createRouter(csvCreator);
  app.use('/api/csv', csvRouter);

  
})
.catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});