

var databaseUrl = "mongodb://127.0.0.1:27017/proj";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(email, password, response) {
db.users.find({ "email": email,"password":password },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(fname, lname, email, date, password, gender, response) {
console.log('Saving user to mongo');
db.users.insert({ "fname": fname,"lname":lname, "email": email,"date":date,"password":password,"gender":gender },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}
