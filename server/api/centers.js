"use strict";
const router = require("express").Router();
const { Centers } = require("../db");

router.get('/', (req, res, next) => {
    Centers.findAll()
      .then(allCenters => res.json(allCenters))
      .catch(next);
});


module.exports = router;