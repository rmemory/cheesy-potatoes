const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here

router.get('/', storeController.myMiddleware, storeController.homePage);

// router.get('/', (req, res) => {
// 	const myData = {name: 'Richard', age: 100, nifty: true};
// 	// res.send(req.query.name); //http://localhost:7777/?name=bob
// 	// res.json(req.query);
// 	// res.json(myData);
// 	// res.send('Hey! It works!');
// 	res.render('hello.pug', 
// 		{
// 			name: 'Richard', 
// 			age: 100, 
// 			nifty: true,
// 			dog: req.query.dog,
// 			title: 'Really good stuff',
// 		});
// });

// router.get('/reverse/:name', (req, res) => {
// 	const reverse = [...req.params.name].reverse().join('');
// 	res.json(reverse)
// })

module.exports = router;
