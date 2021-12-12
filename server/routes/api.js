const express = require('express');
const drinkController = require('../controllers/drinkController');
const drinksController = require('../controllers/drinkController');
const router = express.Router();

router.get('/', drinksController.getDrinks, (req, res) =>
  res.status(200).json(res.locals.drinks)
);

router.get('/:name', drinkController.getSpecificDrink, (req, res) =>
  res.status(200).json(res.locals.drink)
);

router.post('/', drinksController.addDrink, (req, res) =>
  res.status(200).json(res.locals.drinks)
);

// router.patch('/:rating', drinksController.updateRating, (req, res) =>
//   res.status(200).json(res.locals.dirnk)
// );

router.delete('/:name', drinkController.deleteDrink, (req, res) =>
  res.status(200).send('Deleted')
);

module.exports = router;
