const mongoose = require('mongoose');
// Import model, which is registered in start.js
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
	// console.log(req.name);
	res.render('index', {title: 'Wow'});
};

exports.addStore = (req, res) => {
	// res.send('add store');
	res.render('editStore', { title: 'Add Store'});
}


/* Because of async usage, this function returns a promise always,
   which is used by catchErrors. See routes/index.js */
exports.createStore = async (req, res) => {
	// res.json(req.body)
	/* Because we are using a "strict schema" in Store.js
	   this operation will only pick up the fields found in 
	   post data (aka, req.body)
	 */
	const store = new Store(req.body);

	//store.goober = "foobar";

	// store // async operation
	// 	.save()
	// 	.then(store => {
	// 		res.json(store);
	// 	})
	// 	.catch(err => {
	// 		throw new Error(err);
	// 	})

	await store.save();
	res.redirect('/');
}