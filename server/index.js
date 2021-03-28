let express = require("express");
let vjm 	= require("vue-jwt-mongo");
let multer 	= require("multer");
let Mclient = require("mongodb").MongoClient;
let url 	= "mongodb://localhost", dbName = "photofeed";

let app = express();

function getKey() {
	return "lx8SC2fy5Cfhjf7p77cNvTyFkpu96rznAhQd3le8w3qGs4MSbvV0l1QOfhLnkWj";
}


let vjmServer = vjm.Server({
	mongoUrl: url + "/" + dbName,
	jwtSecret: getKey()
});


app.use(express.static("../client"));

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})