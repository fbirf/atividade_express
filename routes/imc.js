
var person = require('../utils/person');
var express = require('express');
var router = express.Router();

router.post("/", (req, res) => {
  const {
      height, 
      weight
  } = req.body;
  
  const p = new person(height, weight)
      .withImc()
      .withImcDescription();
  
  res.send(JSON.stringify(p));
});

module.exports = router;
