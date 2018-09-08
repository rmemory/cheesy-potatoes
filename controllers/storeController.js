exports.homePage = (req, res) => {
	// console.log(req.name);
	res.render('index', {title: 'Wow'});
};

exports.addStore = (req, res) => {
	// res.send('add store');
	res.render('editStore', { title: 'Add Store'});
}