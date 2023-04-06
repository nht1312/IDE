//import 
var express = require('express');
var router = express.Router();

// Home
router.use("/ide", require(__dirname + "/HomeController"));

//export 
module.exports = router;