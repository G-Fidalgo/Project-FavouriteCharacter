require('dotenv').config();

const mongoose = require("mongoose");
const Characters = require("../models/Characters");

mongoose.Promise = Promise;
mongoose
  .connect(`${process.env.DB_URL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  Characters.create({
  name: 'IronMan',
  image: 'https://img.icons8.com/color/480/000000/iron-man.png',
  count: 0,
  coords: []
},
{
  name: 'Deadpool',
  image: 'https://img.icons8.com/color/480/000000/deadpool.png',
  count: 0,
  coords: []
},
{
  name: 'Punisher',
  image: 'https://img.icons8.com/color/480/000000/punisher.png',
  count: 0,
  coords: []
},
{
  name: 'Venom',
  image: 'https://img.icons8.com/color/480/000000/venom-head.png',
  count: 0,
  coords: []
})
.then(() => mongoose.disconnect())
.catch(err => console.log(err));