const express = require("express");
// assign express route to router
const router = express.Router();

const Users = require("../../services/users");

router.get("/", (req, res) => {
	res.json(Users);
});



module.exports = router;
