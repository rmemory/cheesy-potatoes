const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);

// One of the error handling middlewares created in app.js will handle errors
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
