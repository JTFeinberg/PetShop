"use strict";
const router = require("express").Router();
const { Animals } = require("../db");

router.get('/', (req, res, next) => {
    Animals.findAll()
      .then(allAnimals => res.json(allAnimals))
      .catch(next);
});


module.exports = router;