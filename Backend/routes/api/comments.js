const express = require("express");
const Comments = require("../../services/comments");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(Comments);
	res.send(JSON.parse(Comments));
});

router.get("/:id", (req, res) => {
	// check if id is equal to the index number
	const comment = Comments.some(
		comment => comment._id === parseInt(req.params.id)
	);

	// checks if user is not true return 404 error else return user information
	!comment
		? res.status(404).send("comment not found")
		: res.send(
				Comments.filter(comment => comment._id === parseInt(req.params.id))
		  );
});

router.get("/:id", (req, res) => {
	console.log(Genre);
	res.send(JSON.parse(Genre));
});

module.exports = router;
