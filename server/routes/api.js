const express = require('express');
const drinkController = require('../controllers/drinkController');
const router = express.Router();

router.get('/', drinkController.getDrinks, (req, res) =>
  res.status(200).json(res.locals.drinks)
);

router.get('/:name', drinkController.getSpecificDrink, (req, res) =>
  res.status(200).json(res.locals.drink)
);

router.post('/', drinkController.addDrink, (req, res) =>
  res.status(200).json(res.locals.drinks)
);

// router.patch('/:rating', drinksController.updateRating, (req, res) =>
//   res.status(200).json(res.locals.dirnk)
// );

router.delete('/:id', drinkController.deleteDrink, (req, res) =>
  res.status(200).send('Deleted')
);

module.exports = router;
