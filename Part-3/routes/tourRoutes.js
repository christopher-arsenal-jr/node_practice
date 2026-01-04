const express = require('express');
const route = express.Router();

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

const getTour = (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

route.get('/', getAllTours);
route.get('/:id', getTour);

module.exports = route;