const config = require("config");

const privatekey = process.env.JWT_KEY || config.get("jwtPrivateKey")

module.exports = function() {
	if (!privatekey) {
		throw new Error("FATAL ERROR: jwtPrivate is not defined.");
		process.exit(1);
	}
};
