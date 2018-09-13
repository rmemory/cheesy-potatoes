const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

const { catchErrors } = require('../handlers/errorHandlers')

// router.get('/', (request, response, next) => {
//see https://expressjs.com/en/api.html#res
//  response.send("Hello world")
//  response.json({somedata: 'somevalue'})
//  response.send(request.query.name) // sends back anything ?name=bob in the url
//  response.json(request.query) // the entire query object
// })

// router.get('/something/:name', (request, response) => {
//  const reverse = [...req.params.name].reverse().join('');
//  response.send(req.params.name);
// })

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);

// One of the error handling middlewares created in app.js will handle errors
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
