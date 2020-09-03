const express = require("express");

//const config = require("config");
// var key = config.get("movieDBkey")

// assign express to app
const app = express();
const Cors = require("cors");

app.use(Cors());

// route folder location pass app
require("./startup/routes")(app);
require("./startup/config")();

// Assign port if not assign in the  environment
const PORT = process.env.PORT || 5000;

console.log(`Application environment: ${app.get("env")}`);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
