exports.apply = function (ctx, utils) {
	utils.express.app.get('/hello', (req, res) => {
		res.send('hi');
	});
};