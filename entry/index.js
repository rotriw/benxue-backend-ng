require('../utils/require.config');
const { Context } = require('cordis');
const fs = require("fs");
const path = require('path');

core = new Context();

const utilList = fs.readdirSync('./utils');

let utils = {};

utilList.forEach(file => {
	if (file == 'require.config.js' || file == '.DS_Store') {
		return;
	} else {
		const requirePath = path.join('../', 'utils', file);
		utils[path.parse(requirePath).name] = require(requirePath);
	}
});

utilList.forEach(file => {
	if (file == 'require.config.js' || file == '.DS_Store') {
		return;
	} else {
		const requirePath = path.join('../', 'utils', file);
		utils[path.parse(requirePath).name].init(utils);
	}
});

const packages = fs.readdirSync('./packages/handle');

packages.forEach(file => {
	if (file == '.DS_Store') {
		return;
	}
	const requirePath = path.join('../', 'packages', 'handle', file);
	core.plugin(require(requirePath), utils);
});