exports.myMiddleware = (req, res, next) => {
	req.name = 'Richard';
	if (req.name === 'Richard') {
		// throw Error('That is stupid');
	}
	res.cookie('myCookie', 'This is a neat cookie');
	next();
}

exports.homePage = (req, res) => {
	// console.log(req.name);
	res.render('index', {title: 'Wow'});
};