const {zhixue} = require("../model/request");
exports.apply = function (ctx, utils) {
	utils.express.app.post('/login', async(req, res) => {
		/*
		Request Parameters:
			username: string 		//username for zhixue.com
			password: string
		Response Data:
            token: string;
            childId: string;
            user: {
				name: string;
				userid: string;
            };
            class: {
                name: string;
            };
            school: {
                name: string;
			};
		*/
		console.log(zhixue);
		res.send(await zhixue.login(req.body.username, req.body.password));
	});
};