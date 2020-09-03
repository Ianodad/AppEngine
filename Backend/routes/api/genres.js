const express = require("express");
const Genres = require("../../services/genres");

const router = express.Router();

router.get("/", async (req, res) => {
	const genres= await Genres();
	res.send(genres);
});

router.get("/:id", (req, res) => {
	console.log(Genres);
	res.send(JSON.parse(Genres));
});

module.exports = router;
