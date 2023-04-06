//import
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
//stringify
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
//controller
var controller = require(__dirname  + "/apps/controllers");
app.use(controller);
//set view engine
app.set("views",__dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
//setup server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})