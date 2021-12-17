const db = require('../models/drinkModel');

const drinkController = {}; 

drinkController.getDrinks = (req, res, next) => {
    const text = 'SELECT * FROM cocktails;';

    db.query(text)
        .then((data) => {
            console.log(data);
            res.locals.drinks = data.rows;
            return next();
        })
        .catch((err) => {
            console.log('Error in drinkController.getDrinks');
            return next({ log: `ERROR in drinkController.getDrinks: ${err}`});
        });
};

drinkController.getSpecificDrink = (req, res, next) => {
    const name = req.params.name;
    const id = [name];
    const text = 'SELECT * FROM cocktails WHERE name = ($1);';

    db.query(text, id)
    .then((data) => {
        res.locals.drink = data.rows;
        return next();
    })
    .catch((err) => {
        console.log('Error in drinkController.getSpecificDrink');
        next({
            log: `ERROR in drinkController.getSpecificDrink: ${err}`
        });
    });

};

drinkController.addDrink = (req, res, next) => {

    const { name, date, rating, comment } = req.body;

    // console.log(req.body); 

    const id = [
        name,
        date,
        rating,
        comment
    ];

    const text = 'INSERT INTO cocktails (name, date, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *;'
    // const text = 'INSERT INTO cocktails (name, date, rating, comment) VALUES ($1, $2, $3, $4);'

    db.query(text, id)
    .then((data) => {
        res.locals.drinks = data.rows[0];
        return next();
    })
    .catch((err) => {
        console.log('Error in drinkController.addDrink');
        next({
            log: `ERROR in drinkController.addDrink: ${err}`
        });
    });
};

// drinkController.updateRating = (req, res, next) => {
//     const name = req.params.id;
//     const newRating = req.body
//     const id = [name];


// }

drinkController.deleteDrink = (req, res, next) => {
    const drinkId = req.params.id;
    // console.log(req.params)
    const id = [drinkId];
    // console.log(drinkId)
    const text = 'DELETE FROM cocktails WHERE cocktail_id = ($1);'

    db.query(text, id)
    .then((data) => {
        console.log('Successful delete')
        return next();
    })
    .catch((err) => {
        console.log('Error in drinkController.deleteDrink');
        next({
            log: `ERROR in drinkController.deleteDrink: ${err}`
        });
    });
}


module.exports = drinkController;