const express = require("express");
const favchar = express.Router()
const Characters = require('../models/Characters')


favchar.get('/characters', (req, res) => {
  Characters.find({})
    .then((characters)=>{
      res.json({characters})
    })
    .catch(err => console.log('An error ocurred while getting de characters info'))
})

favchar.post('/voted', (req, res) => {
  const lat = req.body.lat
  const lng = req.body.lng
  const character = req.body.character

      
  Characters.findByIdAndUpdate(character, {$inc: {count: 1}, $push: {coords: {lat: +lat, lng: +lng}}})
    .then((vote) => res.json(vote))
    .catch(err => console.log('An error ocurred while saving the vote'))
})

module.exports = favchar
