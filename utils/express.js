const express = require('express');

exports.app = new express();

exports.init = function (utils) {
	utils.express.app.listen(3000, () => {
		
	});
};