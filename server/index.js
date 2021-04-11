let express = require("express");
let vjm 	= require("vue-jwt-mongo");
let multer 	= require("multer");
let upload 	= multer({dest: "../client/data"});
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


app.post("/auth/register", vjmServer.registerHandler);

app.post("/auth/login", vjmServer.loginHandler);

app.post("/upload", [vjmServer.jwtProtector,upload.single("picture")],
	function(req, res){
		insertRecord(req.user.username, req.file.filename);
		res.sendStatus(200);
	});

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})


function insertRecord(user, file) {
	let date = new Date();
	var record = {user: user, file: file, date: date};
	database.collection("files").insertOne(record, function(err, res){});
}