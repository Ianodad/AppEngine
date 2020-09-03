const express = require("express");

module.exports = function(app) {
	app.use(
		express.urlencoded({
			extended: false
		})
	);

	// Body Parser
	app.use(express.json());

	// API ROUTINGS
	app.use("/api/users", require("../routes/api/users"));
	app.use("/api/movies", require("../routes/api/movies"));
	app.use("/api/genres", require("../routes/api/genres"));
	app.use("/api/comments", require("../routes/api/comments"));
	app.use("/api/auth", require("../routes/api/auth"));
};
