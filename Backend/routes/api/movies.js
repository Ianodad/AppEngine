const express = require("express");
const auth = require("../../middleware/auth");

const Movies = require("../../services/movies");
const Comments = require("../../services/comments");

const router = express.Router();

const Joi = require("joi");
// const c = require("config");

router.get("/", auth, async (req, res) => {

	const {results} = await Movies()
	// console.log(results)
	res.json(results);
});

router.get("/:id", auth, async(req, res) => {
	const {results} = await Movies();
	// console.log(results)
	const movie = await results.some((movie) => movie.id === parseInt(req.params.id));
	// console.log(movie)

	!movie ?  res.status(404).send("Movie not found") :
	res.send(results.filter(movie => movie.id === parseInt(req.params.id)));
	// send filter results
});

// get all comments belong to the movie
router.get("/:id/comments", (req, res) => {
	// check if id is equal to the index number
	const comments = Comments.some(
		comment => comment.movieId == parseInt(req.params.id)
	);
	
	console.log(Comments)
	!comments ? res.status(404).send("movie not found") : res.send(Comments.filter(comment => comment.movieId == parseInt(req.params.id)));
});

router.post("/:id/comment", async(req, res) => {
	const { error } = validateComment(req.body);

	console.log(error)
	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}


	const { results } = await Movies();
	const movie = results.some(movie => movie.id === parseInt(req.params.id));
	if (!movie) return res.status(400).send("Invalid movie.");

	console.log(req.body)
	const newComment = {
		_id: Comments.length,
		movieId: req.body.movieId,
		comment: req.body.comment,
		userName: req.body.username
	};

	Comments.push(newComment);
	res.send(newComment);
});

function validateComment(comment) {
	const schema = {
		movieId: Joi.required(),
		comment: Joi.string().required(),
		username: Joi.string()
	};

	return Joi.validate(comment, schema);
}
module.exports = router;
