"use strict";
const router = require("express").Router();
const { Animals, Centers } = require("../db");

router.get('/', (req, res, next) => {
    Animals.findAll()
      .then(allAnimals => res.json(allAnimals))
      .catch(next);
});

router.get('/:animalId', (req, res, next) => {
  Animals.findById(
    req.params.animalId, 
    {
      include: {
      model: Centers
      }
    }
  )
  .then(singleAnimal => res.json(singleAnimal))
  .catch(next);
});


module.exports = router;