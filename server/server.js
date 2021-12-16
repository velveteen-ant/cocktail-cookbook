const express = require('express');
const path = require('path');
const drinkController = require('./controllers/drinkController');
const cors = require('cors');

const app = express();

app.use(cors());
/**
 * handle parsing request body, turns req.body into something usable, this has to come before my route handler
 */
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production'){
  // statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
}

 /**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
 app.use('/api', apiRouter);


 // catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error: This page does not exist...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


/**
 * start server
 */
 app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;