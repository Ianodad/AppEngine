const config = require("config");
const express = require("express");
const Users = require("../../services/users");

const router = express.Router();

const jwt = require("jsonwebtoken");
const Joi = require("joi");

router.post("/login", (req, res) => {
	console.log(req.body);
	const { error } = validateLogin(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const username = Users.some(user => user.username === req.body.username);
	if (!username) return res.status(400).send("invalid username");

	const password = Users.some(
		password => password.password === req.body.password
	);
	if (!password) return res.status(400).send("invalid password");

	const user = Users.find(user => user.username === req.body.username);

	const token = jwt.sign({ user }, config.get("jwtPrivateKey"), {
		expiresIn: 86400
	});
	console.log(token);
	res
		.header("x-auth-token", token)
		.header("access-control-expose-headers", "x-auth-token")
		.status(200)
		.send({ auth: true, token });
});

function validateLogin(login) {
	const schema = {
		username: Joi.string().required(),
		password: Joi.string().required()
	};
	return Joi.validate(login, schema);
}

module.exports = router;
